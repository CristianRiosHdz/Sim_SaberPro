/* ============================================================
   RENDERER — Router SPA y renderizado de vistas
   ============================================================ */

import { StorageManager } from '../engine/storage.js';
import { QuizEngine } from '../engine/quiz-engine.js';
import { Components } from './components.js';
import { ModalManager } from './modal.js';
import { AuthService } from '../services/auth-service.js';
import { ProfileService } from '../services/profile-service.js';
import { ContentService } from '../services/content-service.js';
import { ExamService } from '../services/exam-service.js';
import { formatTime, escapeHtml } from '../utils/helpers.js';
import { ImageUtils } from '../utils/image-utils.js';

export const Renderer = {

    _timerInterval: null,
    _currentFeedback: null,
    _currentUser: null,
    _currentProfile: null,
    _lastQuizResult: null,  // Almacena el resultado en vivo justo tras terminar un quiz

    /**
     * Inicializa el router hash-based.
     */
    async init() {
        // Escuchar cambios de autenticación
        AuthService.onAuthStateChange(async (event, session) => {
            const newUser = session?.user || null;

            if (event === 'PASSWORD_RECOVERY') {
                this._currentUser = newUser;
                console.log("Recovery mode active");
                this.navigateTo('#reset-password');
                return;
            }

            if (this._currentUser?.id === newUser?.id && event !== 'SIGNED_OUT') return;

            this._currentUser = newUser;
            if (this._currentUser) {
                this._currentProfile = await ProfileService.getProfile(this._currentUser.id);
                await StorageManager.init();
            } else {
                this._currentProfile = null;
            }
            this._handleRoute();
        });

        window.addEventListener('hashchange', () => this._handleRoute());

        // Carga inicial de usuario
        this._currentUser = await AuthService.getCurrentUser();
        if (this._currentUser) {
            this._currentProfile = await ProfileService.getProfile(this._currentUser.id);
            await StorageManager.init();
        }

        this._handleRoute();
    },

    /**
     * Navega a una ruta hash.
     * @param {string} hash
     */
    navigateTo(hash) {
        window.location.hash = hash;
    },

    // ────────────────────────────────────────────────
    // ROUTING
    // ────────────────────────────────────────────────

    async _handleRoute() {
        const rawHash = window.location.hash || '#home';

        // DETECCIÓN ESPECIAL: Si el hash contiene un token de recuperación de Supabase
        if (rawHash.includes('type=recovery') || rawHash.includes('access_token=')) {
            // Si es recuperación, forzamos la ruta a reset-password
            if (rawHash.includes('type=recovery')) {
                console.log("Detectado token de recuperación en URL");
                return this._renderResetPassword();
            }
            // Si es confirmación de registro (signup), permitimos que siga pero marcamos el camino
            if (rawHash.includes('type=signup')) {
                console.log("Detectado token de confirmación de cuenta");
            }
        }

        // Supabase añade tokens con & o ?, limpiamos para obtener la ruta real
        const cleanHash = rawHash.split('&')[0].split('?')[0];
        const [route, param] = cleanHash.substring(1).split('/');

        console.log("Navigating to:", route); // Debug
        this._clearTimer();
        this._currentFeedback = null;

        // Rutas públicas
        if (route === 'login') {
            if (this._currentUser) return this.navigateTo('#home');
            return this._renderLogin();
        }
        if (route === 'register') {
            if (this._currentUser) return this.navigateTo('#home');
            return this._renderRegister();
        }
        if (route === 'forgot-password') {
            return this._renderForgotPassword();
        }
        if (route === 'reset-password') {
            return this._renderResetPassword();
        }

        // Guard de autenticación
        if (!this._currentUser) {
            return this.navigateTo('#login');
        }

        // Guard de perfil (si no ha completado el nombre, forzar setup)
        // EXCEPCIÓN: No forzar perfil durante el reset de contraseña para evitar redirecciones infinitas o bloqueos
        if (!this._currentProfile?.full_name && route !== 'profile-setup' && route !== 'reset-password') {
            return this.navigateTo('#profile-setup');
        }

        switch (route) {
            case 'profile-setup':
                this._renderProfileSetup();
                break;
            case 'admin':
                if (this._currentProfile?.is_admin) {
                    await this._renderAdmin();
                } else {
                    this.navigateTo('#home');
                }
                break;
            case 'quiz':
                this._renderQuiz(param);
                break;
            case 'results':
                this._renderResults(param);
                break;
            case 'stats':
                this._renderStats();
                break;
            case 'study':
                this._renderStudy(param);
                break;
            case 'home':
            default:
                this._renderHome();
                break;
        }
    },

    // ────────────────────────────────────────────────
    // AUTH VIEWS
    // ────────────────────────────────────────────────

    _renderLogin() {
        const main = document.getElementById('app');
        main.innerHTML = `
            <div class="auth-container fade-in">
                <div class="auth-card card">
                    <div class="auth-header">
                        <div class="auth-logo">🎓</div>
                        <h2>Bienvenido de nuevo</h2>
                        <p>Ingresa tus credenciales para continuar tu preparación</p>
                    </div>
                    <form id="login-form" class="auth-form">
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" required placeholder="ejemplo@correo.com">
                        </div>
                        <div class="form-group">
                            <div style="display: flex; justify-content: space-between; align-items: center">
                                <label for="password">Contraseña</label>
                                <a href="#forgot-password" style="font-size: 12px; color: var(--color-primary); text-decoration: none">¿Olvidaste tu contraseña?</a>
                            </div>
                            <input type="password" id="password" required placeholder="••••••••">
                        </div>
                        <div id="auth-error" class="auth-error-msg hidden"></div>
                        <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
                    </form>
                    <div class="auth-footer">
                        <p>¿No tienes cuenta? <a href="#register">Regístrate aquí</a></p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const errorEl = document.getElementById('auth-error');
            const submitBtn = e.target.querySelector('button');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Iniciando sesión...';
                errorEl.classList.add('hidden');
                await AuthService.login(email, password);
                // navigateTo se dispara por onAuthStateChange
            } catch (error) {
                errorEl.textContent = 'Error: ' + error.message;
                errorEl.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Iniciar Sesión';
            }
        });
    },

    _renderRegister() {
        const main = document.getElementById('app');
        main.innerHTML = `
            <div class="auth-container fade-in">
                <div class="auth-card card">
                    <div class="auth-header">
                        <div class="auth-logo">🎓</div>
                        <h2>Crea tu cuenta</h2>
                        <p>Únete a miles de estudiantes y prepárate para el Saber Pro</p>
                    </div>
                    <form id="register-form" class="auth-form">
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" required placeholder="ejemplo@correo.com">
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" id="password" required minlength="6" placeholder="Mínimo 6 caracteres">
                        </div>
                        <div class="form-group" style="display: flex; align-items: flex-start; gap: var(--spacing-3); background: var(--color-bg-alt); padding: var(--spacing-4); border-radius: 8px; border: 1px solid var(--color-border)">
                            <input type="checkbox" id="consent" required
                                style="margin-top: 3px; min-width: 16px; accent-color: var(--color-primary)">
                            <label for="consent" style="font-size: var(--font-size-sm); line-height: 1.5; cursor: pointer; color: var(--color-text-muted)">
                                Acepto el <strong style="color: var(--color-text)">Tratamiento de Datos Personales</strong>.
                                Al registrarme, autorizo la recopilación y uso de mi nombre y correo electrónico
                                con fines académicos y de seguimiento de progreso educativo.
                                Esta información no será compartida con terceros.
                            </label>
                        </div>
                        <div id="auth-error" class="auth-error-msg hidden"></div>
                        <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                    </form>
                    <div class="auth-footer">
                        <p>¿Ya tienes cuenta? <a href="#login">Inicia sesión</a></p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('register-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const errorEl = document.getElementById('auth-error');
            const submitBtn = e.target.querySelector('button');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Creando cuenta...';
                errorEl.classList.add('hidden');

                // Opción 1: Supabase envía correo (default).
                // Opción 2: Si el admin desactiva "Confirm Email", inicia sesión directo.
                await AuthService.register(email, password);

                ModalManager.show({
                    icon: '📧',
                    title: '¡Verifica tu correo!',
                    body: 'Hemos enviado un enlace de activación a tu correo electrónico. Por favor, <strong>haz clic en el enlace</strong> para completar tu registro y configurar tu perfil.',
                    actions: [{ text: 'Entendido', class: 'btn-primary', onClick: () => this.navigateTo('#login') }]
                });
            } catch (error) {
                errorEl.textContent = 'Error: ' + error.message;
                errorEl.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Registrarse';
            }
        });
    },

    _renderForgotPassword() {
        const main = document.getElementById('app');
        main.innerHTML = `
            <div class="auth-container fade-in">
                <div class="auth-card card">
                    <div class="auth-header">
                        <div class="auth-logo">🔑</div>
                        <h2>Recuperar Contraseña</h2>
                        <p>Ingresa tu correo y te enviaremos un enlace para restaurar tu acceso.</p>
                    </div>
                    <form id="forgot-form" class="auth-form">
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" required placeholder="tu@correo.com">
                        </div>
                        <div id="auth-error" class="auth-error-msg hidden"></div>
                        <button type="submit" class="btn btn-primary btn-block">Enviar Enlace de Recuperación</button>
                    </form>
                    <div class="auth-footer">
                        <p><a href="#login">← Volver al Login</a></p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('forgot-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const btn = e.target.querySelector('button');
            const errorEl = document.getElementById('auth-error');

            try {
                btn.disabled = true;
                btn.textContent = 'Enviando...';
                await AuthService.requestPasswordReset(email);
                ModalManager.show({
                    icon: '📧',
                    title: 'Correo Enviado',
                    body: 'Si el correo existe en nuestra base de datos, recibirás un enlace en unos momentos.',
                    actions: [{ text: 'Entendido', class: 'btn-primary', onClick: () => this.navigateTo('#login') }]
                });
            } catch (error) {
                errorEl.textContent = error.message;
                errorEl.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = 'Enviar Enlace';
            }
        });
    },

    _renderResetPassword() {
        const main = document.getElementById('app');
        main.innerHTML = `
            <div class="auth-container fade-in">
                <div class="auth-card card">
                    <div class="auth-header">
                        <div class="auth-logo">🔐</div>
                        <h2>Nueva Contraseña</h2>
                        <p>Asegura tu cuenta con una clave fuerte.</p>
                    </div>
                    <form id="reset-form" class="auth-form">
                        <div class="form-group">
                            <label for="new-password">Nueva Contraseña</label>
                            <input type="password" id="new-password" required placeholder="Ingresa tu nueva clave">
                            <div id="password-requirements" style="font-size: 11px; color: var(--color-text-muted); margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px">
                                <span id="req-len">❌ Mín. 8 caracteres</span>
                                <span id="req-up">❌ 1 Mayúscula</span>
                                <span id="req-num">❌ 1 Número</span>
                                <span id="req-spec">❌ 1 Especial</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirmar Contraseña</label>
                            <input type="password" id="confirm-password" required placeholder="Repite tu nueva clave">
                        </div>
                        <div id="auth-error" class="auth-error-msg hidden"></div>
                        <button type="submit" class="btn btn-primary btn-block" id="btn-save-pass" disabled>Guardar Nueva Contraseña</button>
                    </form>
                </div>
            </div>
        `;

        const passInput = document.getElementById('new-password');
        const confirmInput = document.getElementById('confirm-password');
        const submitBtn = document.getElementById('btn-save-pass');

        const validate = () => {
            const val = passInput.value;
            const valid = {
                len: val.length >= 8,
                up: /[A-Z]/.test(val),
                num: /[0-9]/.test(val),
                spec: /[^A-Za-z0-9]/.test(val)
            };

            const updateReq = (id, isValid) => {
                const el = document.getElementById(id);
                el.innerHTML = (isValid ? '✅ ' : '❌ ') + el.innerText.substring(2);
                el.style.color = isValid ? 'var(--color-success)' : 'var(--color-text-muted)';
            };

            updateReq('req-len', valid.len);
            updateReq('req-up', valid.up);
            updateReq('req-num', valid.num);
            updateReq('req-spec', valid.spec);

            const matches = val === confirmInput.value && val !== '';
            const allOk = valid.len && valid.up && valid.num && valid.spec && matches;
            submitBtn.disabled = !allOk;
        };

        passInput.addEventListener('input', validate);
        confirmInput.addEventListener('input', validate);

        document.getElementById('reset-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const pass = passInput.value;
            const errorEl = document.getElementById('auth-error');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Actualizando seguridad...';

                // Intentamos actualizar directamente.
                // Si llegamos a esta vista es porque Supabase ya procesó el token del URL.
                await AuthService.updatePassword(pass);

                ModalManager.show({
                    icon: '🚀',
                    title: '¡Seguridad Actualizada!',
                    body: 'Tu contraseña ha sido cambiada y ahora cumple con todos los estándares de seguridad.',
                    actions: [{ text: 'Entrar al Simulador', class: 'btn-primary', onClick: () => this.navigateTo('#home') }]
                });
            } catch (error) {
                console.error("Reset error:", error);

                let msg = "No se pudo actualizar la contraseña. ";
                if (error.message.includes('same as old')) {
                    msg = 'La nueva contraseña no puede ser igual a la anterior.';
                } else if (error.message.includes('Auth session missing') || error.message.includes('expired')) {
                    msg = 'La sesión de seguridad se ha cerrado. Por favor, solicita un nuevo enlace desde el inicio y no recargues la página al abrirlo.';
                } else {
                    msg += error.message;
                }

                errorEl.textContent = msg;
                errorEl.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Guardar Nueva Contraseña';
            }
        });
    },

    // ────────────────────────────────────────────────
    // PROFILE FLOW
    // ────────────────────────────────────────────────

    _renderProfileSetup() {
        const main = document.getElementById('app');
        main.innerHTML = Components.profileForm(this._currentUser.email, this._currentProfile || {});

        const form = document.getElementById('profile-setup-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const errorEl = document.getElementById('profile-error');

            try {
                btn.disabled = true;
                btn.textContent = 'Guardando...';

                const profileData = {
                    full_name: e.target.full_name.value,
                    last_name: e.target.last_name.value,
                    university: e.target.university.value
                };

                this._currentProfile = await ProfileService.upsertProfile(profileData);
                this.navigateTo('#home');
            } catch (error) {
                errorEl.textContent = 'Error: ' + error.message;
                errorEl.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = 'Guardar y Continuar';
            }
        });
    },

    // ────────────────────────────────────────────────
    // ADMIN PANEL
    // ────────────────────────────────────────────────

    async _renderAdmin() {
        const main = document.getElementById('app');
        main.innerHTML = '<div style="padding: 40px; text-align: center">Cargando panel de administración...</div>';

        try {
            const modules = await ContentService.getModules();
            let users = [];

            try {
                users = await ProfileService.getAllUsersWithStats();
            } catch (userError) {
                console.error('Error loading users:', userError);
                // Si falla la carga de usuarios (por RLS), permitimos entrar al dashboard 
                // pero informamos en la consola o podrías mostrar un aviso.
                // Aquí el dashboard mostrará "0 estudiantes" o el error si lo manejamos en Components.
            }

            main.innerHTML = Components.adminDashboard(modules, users);
            this._bindAdminEvents();
        } catch (error) {
            main.innerHTML = `
                <div class="card" style="margin: 40px auto; max-width: 600px; padding: 40px; text-align: center">
                    <h2 style="color: var(--color-danger)">⚠️ Error al cargar Admin</h2>
                    <p>${error.message}</p>
                    <button class="btn btn-primary" onclick="window.location.reload()" style="margin-top: 20px">Reintentar</button>
                    <button class="btn btn-ghost" onclick="window.location.hash='#home'" style="margin-top: 10px">Volver al Inicio</button>
                </div>
            `;
        }
    },

    _bindAdminEvents() {
        document.getElementById('btn-go-home')?.addEventListener('click', () => this.navigateTo('#home'));
        document.getElementById('btn-new-module')?.addEventListener('click', () => this._renderModuleEditor());

        // ── Tabs: alternar entre Módulos y Estudiantes ──
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                document.getElementById('tab-modules').style.display = target === 'modules' ? '' : 'none';
                document.getElementById('tab-students-wrapper').style.display = target === 'students' ? '' : 'none';
                document.querySelectorAll('.admin-tab').forEach(t => {
                    const active = t === tab;
                    t.style.color = active ? 'var(--color-primary)' : 'var(--color-text-muted)';
                    t.style.borderBottom = active ? '3px solid var(--color-primary)' : '3px solid transparent';
                    t.style.fontWeight = active ? 'bold' : 'normal';
                });
            });
        });

        document.querySelectorAll('[data-edit-module]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const moduleId = btn.getAttribute('data-edit-module');
                const modules = await ContentService.getModules();
                const module = modules.find(m => m.id === moduleId);
                this._renderModuleEditor(module);
            });
        });

        document.querySelectorAll('[data-delete-module]').forEach(btn => {
            btn.addEventListener('click', () => {
                const moduleId = btn.getAttribute('data-delete-module');
                ModalManager.show({
                    icon: '⚠️',
                    title: '¿Eliminar Módulo?',
                    body: `Al eliminar este módulo, también se borrarán todas sus preguntas y contenido de estudio. Esta acción no se puede deshacer.`,
                    actions: [
                        {
                            text: 'Eliminar',
                            class: 'btn-danger',
                            onClick: async () => {
                                await ContentService.deleteModule(moduleId);
                                await StorageManager.init();
                                this._renderAdmin();
                            }
                        },
                        { text: 'Cancelar', class: 'btn-ghost' }
                    ]
                });
            });
        });

        document.querySelectorAll('[data-view-bank]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const moduleId = btn.getAttribute('data-view-bank');
                this._renderQuestionList(moduleId);
            });
        });

        document.querySelectorAll('[data-add-q]').forEach(btn => {
            btn.addEventListener('click', () => {
                const moduleId = btn.getAttribute('data-add-q');
                this._renderQuestionEditor(moduleId);
            });
        });

        // Editor de contenido de biblioteca de estudio
        document.querySelectorAll('[data-edit-study]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const moduleId = btn.getAttribute('data-edit-study');
                const modules = await ContentService.getModules();
                const module = modules.find(m => m.id === moduleId);
                this._renderStudyEditor(module);
            });
        });

        // Reiniciar progreso de usuario
        document.querySelectorAll('[data-reset-user]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const userId = btn.getAttribute('data-reset-user');
                const moduleId = btn.getAttribute('data-reset-mod');

                ModalManager.show({
                    icon: '⚠️',
                    title: '¿Reiniciar Progreso?',
                    body: `Se eliminarán todos los intentos del usuario para este módulo. Esta acción es irreversible.`,
                    actions: [
                        {
                            text: 'Reiniciar',
                            class: 'btn-danger',
                            onClick: async () => {
                                try {
                                    await ExamService.deleteUserModuleAttempts(userId, moduleId);
                                    await this._renderAdmin();
                                    alert('✓ Progreso reiniciado correctamente');
                                } catch (err) {
                                    console.error('Error reset:', err);
                                    alert('Error al reiniciar progreso: ' + err.message);
                                }
                            }
                        },
                        { text: 'Cancelar', class: 'btn-ghost', onClick: () => { } }
                    ]
                });
            });
        });
    },

    /**
     * Renderiza el editor de contenido de la biblioteca de estudio.
     */
    /**
     * Renderiza el editor de contenido por secciones de la biblioteca de estudio.
     */
    async _renderStudyEditor(module) {
        if (!module) return this._renderAdmin();
        const main = document.getElementById('app');
        main.innerHTML = '<div style="padding: 40px; text-align: center">Cargando biblioteca...</div>';

        const existingContent = await ContentService.getStudyContent(module.id);
        main.innerHTML = Components.studyContentForm(module, existingContent);

        const sectionsContainer = document.getElementById('sections-container');
        const sectionEditors = []; // Array de { id, quill }

        const quillConfig = {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'color': [] }, { 'background': [] }],
                    ['link', 'image', 'video', 'formula'],
                    ['clean']
                ]
            },
            placeholder: 'Escribe el desarrollo del tema aquí...'
        };

        const initEditor = (containerId) => {
            const quill = new Quill(`#${containerId}`, quillConfig);
            sectionEditors.push({ id: containerId, quill });
        };

        // 1. Inicializar editores de secciones existentes
        document.querySelectorAll('.section-editor').forEach(div => {
            initEditor(div.id);
        });

        // 2. Evento para añadir nueva sección
        document.getElementById('btn-add-section').addEventListener('click', () => {
            const noMsg = document.getElementById('no-sections-msg');
            if (noMsg) noMsg.remove();

            const nextIndex = sectionsContainer.querySelectorAll('.study-section-edit').length;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = Components.studySectionItem(nextIndex);
            const newNode = tempDiv.firstElementChild;

            sectionsContainer.appendChild(newNode);

            const editorDiv = newNode.querySelector('.section-editor');
            initEditor(editorDiv.id);

            // Bind del botón remover de esta nueva sección
            newNode.querySelector('.btn-remove-section').addEventListener('click', () => {
                const edIdx = sectionEditors.findIndex(e => e.id === editorDiv.id);
                if (edIdx > -1) sectionEditors.splice(edIdx, 1);
                newNode.remove();
            });
        });

        // 3. Bind de botones remover existentes
        document.querySelectorAll('.btn-remove-section').forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.study-section-edit');
                const edId = card.querySelector('.section-editor').id;
                const idx = sectionEditors.findIndex(e => e.id === edId);
                if (idx > -1) sectionEditors.splice(idx, 1);
                card.remove();
            });
        });

        document.getElementById('btn-cancel-admin').addEventListener('click', () => this._renderAdmin());

        // 4. Guardar todo
        document.getElementById('study-content-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = 'Guardando temas...';

            const sections = [];
            // Recorremos el DOM para mantener el orden visual
            document.querySelectorAll('.study-section-edit').forEach(card => {
                const subtitle = card.querySelector('.section-subtitle').value.trim();
                const editorId = card.querySelector('.section-editor').id;
                const quillObj = sectionEditors.find(se => se.id === editorId);
                const content = quillObj ? quillObj.quill.root.innerHTML : '';

                if (subtitle || content !== '<p><br></p>') {
                    sections.push({ subtitle, content });
                }
            });

            try {
                await ContentService.upsertStudyContent(module.id, {
                    title: document.getElementById('sc-title').value.trim(),
                    summary: document.getElementById('sc-summary').value.trim(),
                    sections: sections,
                    body: '' // Limpiamos el campo body (usamos secciones ahora)
                });

                ModalManager.show({
                    icon: '✅',
                    title: 'Temas Guardados',
                    body: `Se han actualizado los temas para "${module.name}" correctamente.`,
                    actions: [{ text: 'Volver al Admin', class: 'btn-primary', onClick: () => this._renderAdmin() }]
                });
            } catch (err) {
                console.error('Error guardando temas:', err);
                btn.disabled = false;
                btn.textContent = '💾 Guardar Todos los Cambios';
                alert('Error al guardar: ' + err.message);
            }
        });
    },

    _renderModuleEditor(module = null) {
        const main = document.getElementById('app');
        main.innerHTML = Components.moduleForm(module);

        document.getElementById('btn-cancel-admin').addEventListener('click', () => this._renderAdmin());

        document.getElementById('admin-module-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');

            const moduleData = {
                id: document.getElementById('m-id').value,
                name: document.getElementById('m-name').value,
                description: document.getElementById('m-desc').value,
                icon: document.getElementById('m-icon').value,
                color: document.getElementById('m-color').value,
                order: parseInt(document.getElementById('m-order').value) || 0,
                questionCount: parseInt(document.getElementById('m-q-count').value) || 25,
                timeLimit: parseInt(document.getElementById('m-time').value) || 40,
                passingScore: parseInt(document.getElementById('m-pass').value) || 60
            };

            try {
                btn.disabled = true;
                btn.textContent = 'Guardando...';
                await ContentService.upsertModule(moduleData);

                // Refrescar StorageManager para que el nuevo módulo aparezca en el home
                await StorageManager.init();

                ModalManager.show({
                    icon: '✅',
                    title: 'Éxito',
                    body: 'Módulo guardado correctamente.',
                    actions: [{ text: 'Volver al Panel', onClick: () => this._renderAdmin() }]
                });
            } catch (error) {
                alert('Error al guardar módulo: ' + error.message);
                btn.disabled = false;
                btn.textContent = 'Guardar Módulo';
            }
        });
    },

    _renderQuestionEditor(moduleId, question = null) {
        const main = document.getElementById('app');
        main.innerHTML = Components.questionForm(moduleId, question);

        // Manejar cambios en imagen de pregunta
        const qImgInput = document.getElementById('q-image-input');
        const qImgPreview = document.getElementById('q-image-preview');
        const qImgData = document.getElementById('q-image-data');

        qImgInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const base64 = await ImageUtils.compressImage(file);
                qImgData.value = base64;
                qImgPreview.querySelector('img').src = base64;
                qImgPreview.classList.remove('hidden');
            } catch (err) {
                alert('Error al procesar imagen');
            }
        });

        document.getElementById('btn-remove-q-img').addEventListener('click', () => {
            qImgData.value = '';
            qImgInput.value = '';
            qImgPreview.classList.add('hidden');
        });

        // Manejar cambios en imágenes de opciones
        document.querySelectorAll('[data-opt-img-input]').forEach(input => {
            const optId = input.getAttribute('data-opt-img-input');
            const dataInput = document.querySelector(`[data-opt-img-data="${optId}"]`);
            const preview = document.getElementById(`preview-opt-${optId}`);

            input.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;
                try {
                    const base64 = await ImageUtils.compressImage(file);
                    dataInput.value = base64;
                    preview.querySelector('img').src = base64;
                    preview.classList.remove('hidden');
                } catch (err) {
                    alert('Error al procesar imagen');
                }
            });

            document.querySelector(`[data-remove-opt-img="${optId}"]`).addEventListener('click', () => {
                dataInput.value = '';
                input.value = '';
                preview.classList.add('hidden');
            });
        });

        document.getElementById('btn-cancel-admin').addEventListener('click', () => this._renderQuestionList(moduleId));

        // Inicializar editores WYSIWYG
        const quillToolbar = [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video', 'formula'],
            ['clean']
        ];

        const contextQuill = new Quill('#q-context-editor', {
            theme: 'snow',
            modules: { toolbar: quillToolbar },
            placeholder: 'Contexto u opcional de lectura...'
        });

        const textQuill = new Quill('#q-text-editor', {
            theme: 'snow',
            modules: { toolbar: quillToolbar },
            placeholder: 'Escribe el enunciado de la pregunta...'
        });

        const explanationQuill = new Quill('#q-explanation-editor', {
            theme: 'snow',
            modules: { toolbar: quillToolbar },
            placeholder: 'Explica por qué la respuesta es correcta...'
        });

        document.getElementById('admin-question-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');

            const options = [];
            e.target.querySelectorAll('[data-opt-id]').forEach(input => {
                const optId = input.getAttribute('data-opt-id');
                const imgData = e.target.querySelector(`[data-opt-img-data="${optId}"]`).value;
                options.push({
                    id: optId,
                    text: input.value,
                    imageUrl: imgData || null
                });
            });

            const questionData = {
                module_id: moduleId,
                context: contextQuill.root.innerHTML === '<p><br></p>' ? '' : contextQuill.root.innerHTML,
                text: textQuill.root.innerHTML,
                imageUrl: document.getElementById('q-image-data').value,
                options: options,
                correctAnswer: document.getElementById('q-correct').value,
                explanation: explanationQuill.root.innerHTML === '<p><br></p>' ? '' : explanationQuill.root.innerHTML
            };

            // Si es edición, incluir el ID
            if (question?.id) {
                questionData.id = question.id;
            }

            try {
                btn.disabled = true;
                btn.textContent = 'Guardando...';
                await ContentService.upsertQuestion(questionData);
                ModalManager.show({
                    icon: '✅',
                    title: 'Éxito',
                    body: 'Pregunta guardada correctamente.',
                    actions: [{
                        text: 'Volver', onClick: () => {
                            // Si veníamos del banco, volver al banco
                            this._renderQuestionList(moduleId);
                        }
                    }]
                });
            } catch (error) {
                alert('Error al guardar: ' + error.message);
                btn.disabled = false;
                btn.textContent = 'Guardar Pregunta';
            }
        });
    },

    async _renderQuestionList(moduleId) {
        const main = document.getElementById('app');
        const modules = await ContentService.getModules();
        const module = modules.find(m => m.id === moduleId);
        const questions = await ContentService.getQuestionsByModule(moduleId);

        main.innerHTML = Components.questionList(module, questions);
        this._bindQuestionListEvents(moduleId, questions);
    },

    _bindQuestionListEvents(moduleId, questions) {
        document.getElementById('btn-cancel-admin').addEventListener('click', () => this._renderAdmin());

        document.querySelector('[data-add-q]').addEventListener('click', () => {
            this._renderQuestionEditor(moduleId);
        });

        document.querySelectorAll('[data-edit-q-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const qId = btn.getAttribute('data-edit-q-id');
                const question = questions.find(q => q.id == qId);
                this._renderQuestionEditor(moduleId, question);
            });
        });

        document.querySelectorAll('[data-delete-q-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const qId = btn.getAttribute('data-delete-q-id');

                ModalManager.show({
                    icon: '🗑️',
                    title: '¿Eliminar pregunta?',
                    body: 'Esta acción no se puede deshacer. La pregunta se borrará permanentemente de la base de datos.',
                    actions: [
                        {
                            text: 'Eliminar',
                            class: 'btn-danger',
                            onClick: async () => {
                                await ContentService.deleteQuestion(qId);
                                this._renderQuestionList(moduleId);
                            }
                        },
                        { text: 'Cancelar', class: 'btn-ghost' }
                    ]
                });
            });
        });
    },

    // ────────────────────────────────────────────────
    // HOME VIEW
    // ────────────────────────────────────────────────

    async _renderHome() {
        // Refrescar estado desde Supabase para mostrar progreso actualizado
        if (this._currentUser) {
            await StorageManager.refreshState(this._currentUser.id);
        }
        const main = document.getElementById('app');
        const modules = StorageManager.getModules();
        const modulesOrder = StorageManager.getModulesOrder();
        const stats = StorageManager.getStats();
        const settings = StorageManager.getSettings();
        const isFreeMode = settings.freeMode;

        const cardsHtml = modules.map((mod, i) => {
            const isUnlocked = StorageManager.isModuleUnlocked(mod.id, modulesOrder);
            const result = StorageManager.getModuleResult(mod.id);
            return Components.moduleCard(mod, i, isUnlocked, result);
        }).join('');

        const description = isFreeMode
            ? 'Modo Libre activo: Puedes practicar en cualquier módulo sin restricciones de orden.'
            : 'Modo Secuencial activo: Completa cada módulo para desbloquear el siguiente y avanzar en tu preparación.';

        const adminBtnHtml = this._currentProfile?.is_admin
            ? `<button class="btn btn-ghost btn-sm" id="btn-go-admin">⚙️ Admin</button>`
            : '';

        main.innerHTML = `
      <div class="slide-up">
        <div class="user-bar">
            <span>Hola, <strong>${escapeHtml(this._currentProfile?.full_name || this._currentUser.email.split('@')[0])}</strong></span>
            <div style="display: flex; gap: var(--spacing-2)">
                ${adminBtnHtml}
                <button class="btn btn-ghost btn-sm" id="btn-logout">Cerrar Sesión</button>
            </div>
        </div>

        <div class="page-header">
          <h1 class="page-title">Simulador Saber Pro</h1>
          <p class="page-description">${description}</p>
        </div>

        <div class="mode-selector-wrapper" style="margin-bottom: var(--spacing-8)">
            <label class="mode-selector-label">Modo de Práctica:</label>
            <div class="mode-selector">
                <button class="mode-btn ${!isFreeMode ? 'active' : ''}" id="mode-sequential">
                    <span class="mode-icon">🔗</span>
                    <span class="mode-text">Secuencial</span>
                </button>
                <button class="mode-btn ${isFreeMode ? 'active' : ''}" id="mode-free">
                    <span class="mode-icon">🔓</span>
                    <span class="mode-text">Libre</span>
                </button>
            </div>
        </div>

        ${Components.progressBar(stats.modulesCompleted, stats.totalModules)}

        <div class="modules-grid" style="margin-top: var(--spacing-8)">
          ${cardsHtml}
        </div>

        <div style="text-align: center; margin-top: var(--spacing-8)">
          <button class="btn btn-primary" id="btn-go-study" style="margin-bottom: var(--spacing-4); width: 100%; max-width: 400px;">📚 Biblioteca de Estudio</button>
          <br>
          <button class="btn btn-ghost" id="btn-view-stats">📊 Ver Estadísticas</button>
        </div>
      </div>
    `;

        this._bindHomeEvents();
    },

    _bindHomeEvents() {
        // Logout
        document.getElementById('btn-logout')?.addEventListener('click', async () => {
            await AuthService.logout();
        });

        document.getElementById('btn-go-admin')?.addEventListener('click', () => {
            this.navigateTo('#admin');
        });

        // Selector de modo
        document.getElementById('mode-sequential')?.addEventListener('click', () => {
            StorageManager.updateSettings({ freeMode: false });
            this._renderHome();
        });
        document.getElementById('mode-free')?.addEventListener('click', () => {
            StorageManager.updateSettings({ freeMode: true });
            this._renderHome();
        });

        // Click en tarjetas de módulos
        document.querySelectorAll('[data-module-id]').forEach(card => {
            const handler = () => {
                const moduleId = card.getAttribute('data-module-id');
                const modulesOrder = StorageManager.getModulesOrder();
                const isUnlocked = StorageManager.isModuleUnlocked(moduleId, modulesOrder);

                if (!isUnlocked) {
                    const moduleIndex = modulesOrder.indexOf(moduleId);
                    const prevModule = StorageManager.getModuleById(modulesOrder[moduleIndex - 1]);
                    const currentModule = StorageManager.getModuleById(moduleId);
                    ModalManager.showBlocked(currentModule.name, prevModule.name);
                    return;
                }

                this.navigateTo(`#quiz/${moduleId}`);
            };
            card.addEventListener('click', handler);
            card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
        });

        // Estadísticas
        const statsBtn = document.getElementById('btn-view-stats');
        if (statsBtn) statsBtn.addEventListener('click', () => this.navigateTo('#stats'));

        // Biblioteca de estudio
        const studyBtn = document.getElementById('btn-go-study');
        if (studyBtn) studyBtn.addEventListener('click', () => this.navigateTo('#study'));
    },

    // ────────────────────────────────────────────────
    // QUIZ VIEW
    // ────────────────────────────────────────────────

    async _renderQuiz(moduleId) {
        const module = StorageManager.getModuleById(moduleId);
        if (!module) { this.navigateTo('#home'); return; }

        const modulesOrder = StorageManager.getModulesOrder();
        if (!StorageManager.isModuleUnlocked(moduleId, modulesOrder)) {
            this.navigateTo('#home');
            return;
        }

        // Iniciar quiz si no hay uno activo o es otro módulo
        const currentState = QuizEngine.getQuizState();
        if (!currentState || currentState.moduleId !== moduleId || currentState.isFinished) {
            try {
                const bank = await ContentService.getQuestionsByModule(moduleId);
                if (!bank || bank.length === 0) {
                    throw new Error('No hay preguntas disponibles para este módulo.');
                }
                QuizEngine.startQuiz(module, bank);
            } catch (error) {
                alert(error.message);
                this.navigateTo('#home');
                return;
            }
        }

        this._currentFeedback = null;
        this._renderCurrentQuestion();
        this._startTimer();
    },

    _renderCurrentQuestion() {
        const state = QuizEngine.getQuizState();
        if (!state) { this.navigateTo('#home'); return; }

        const main = document.getElementById('app');
        main.innerHTML = Components.questionCard(state, this._currentFeedback);
        this._bindQuizEvents();
    },

    _bindQuizEvents() {
        // Click en opciones
        document.querySelectorAll('.option-btn:not(.option-disabled)').forEach(btn => {
            btn.addEventListener('click', () => {
                const optionId = btn.getAttribute('data-option-id');
                const feedback = QuizEngine.submitAnswer(optionId);
                if (!feedback) return;

                this._currentFeedback = {
                    selectedId: optionId,
                    isCorrect: feedback.isCorrect,
                    explanation: feedback.explanation
                };

                this._renderCurrentQuestion();
            });
        });

        // Botón siguiente / finalizar
        const nextBtn = document.getElementById('btn-next-question');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const state = QuizEngine.getQuizState();
                if (state.isLastQuestion) {
                    this._finishQuiz();
                    return;
                }
                QuizEngine.nextQuestion();
                this._currentFeedback = null;
                this._renderCurrentQuestion();
            });
        }

        // Abandonar
        const quitBtn = document.getElementById('btn-quit-quiz');
        if (quitBtn) {
            quitBtn.addEventListener('click', () => {
                ModalManager.showConfirm(
                    'Abandonar Quiz',
                    '¿Seguro que quieres abandonar? Perderás tu progreso en este intento.',
                    () => { QuizEngine.clearQuiz(); this._clearTimer(); this.navigateTo('#home'); }
                );
            });
        }
    },

    async _finishQuiz() {
        this._clearTimer();
        const result = QuizEngine.finishQuiz();
        if (!result) { this.navigateTo('#home'); return; }

        try {
            await StorageManager.saveModuleResult(result.moduleId, result);
            // Guardar el resultado en vivo para mostrarlo directamente (conserva correctAnswers)
            this._lastQuizResult = result;
            this.navigateTo(`#results/${result.moduleId}`);
        } catch (error) {
            console.error('Error al guardar:', error);
            ModalManager.show({
                icon: '⚠️',
                title: 'Error al guardar',
                body: 'No pudimos guardar tus resultados en la nube. ' + error.message,
                actions: [{ text: 'Reintentar', onClick: () => this._finishQuiz() }, { text: 'Ir al Home', onClick: () => this.navigateTo('#home') }]
            });
        }
    },

    _startTimer() {
        this._clearTimer();
        const state = QuizEngine.getQuizState();
        if (!state || !state.timeLimit) return;

        this._timerInterval = setInterval(() => {
            if (QuizEngine.isTimeUp()) {
                this._clearTimer();
                ModalManager.showTimeUp(() => this._finishQuiz());
                return;
            }

            const timerEl = document.getElementById('quiz-timer');
            if (timerEl) {
                const remaining = QuizEngine.getQuizState()?.remainingSeconds;
                if (remaining != null) {
                    timerEl.textContent = `⏱️ ${formatTime(remaining)}`;
                    if (remaining <= 60) {
                        timerEl.classList.add('question-timer-warning');
                    }
                }
            }
        }, 1000);
    },

    _clearTimer() {
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
            this._timerInterval = null;
        }
    },

    // ────────────────────────────────────────────────
    // RESULTS VIEW
    // ────────────────────────────────────────────────

    _renderResults(moduleId) {
        // Priorizar el resultado en vivo (tiene correctAnswers completos)
        // Si navegan de vuelta a #results, usar el cache de Supabase
        const result = (this._lastQuizResult?.moduleId === moduleId)
            ? this._lastQuizResult
            : StorageManager.getModuleResult(moduleId);

        // Limpiar el result en vivo para que no persista entre navegaciones
        if (this._lastQuizResult?.moduleId === moduleId) {
            this._lastQuizResult = null;
        }

        if (!result) { this.navigateTo('#home'); return; }

        const main = document.getElementById('app');
        main.innerHTML = Components.resultsScreen(result);
        this._bindResultsEvents(moduleId, result);
    },

    _bindResultsEvents(moduleId, result) {
        document.getElementById('btn-go-home')?.addEventListener('click', () => this.navigateTo('#home'));

        document.getElementById('btn-retry-module')?.addEventListener('click', () => {
            QuizEngine.clearQuiz();
            this.navigateTo(`#quiz/${moduleId}`);
        });

        document.getElementById('btn-next-module')?.addEventListener('click', () => {
            const modulesOrder = StorageManager.getModulesOrder();
            const currentIndex = modulesOrder.indexOf(moduleId);
            if (currentIndex < modulesOrder.length - 1) {
                this.navigateTo(`#quiz/${modulesOrder[currentIndex + 1]}`);
            } else {
                this.navigateTo('#stats');
            }
        });
    },

    // ────────────────────────────────────────────────
    // STATS VIEW
    // ────────────────────────────────────────────────

    async _renderStats() {
        // Siempre refrescar datos desde Supabase antes de mostrar
        // para que admin resets, o cambios en otra sesión, sean visibles.
        if (this._currentUser) {
            await StorageManager.refreshState(this._currentUser.id);
        }
        const stats = StorageManager.getStats();
        const main = document.getElementById('app');
        main.innerHTML = Components.statsPanel(stats);

        document.getElementById('btn-go-home')?.addEventListener('click', () => this.navigateTo('#home'));
    },

    // ────────────────────────────────────────────────
    // STUDY VIEW
    // ────────────────────────────────────────────────

    async _renderStudy(moduleId) {
        const modules = StorageManager.getModules();
        if (modules.length === 0) return this.navigateTo('#home');

        const activeId = moduleId || modules[0].id;

        try {
            const content = await ContentService.getStudyContent(activeId);
            const main = document.getElementById('app');
            main.innerHTML = Components.studyLayout(modules, activeId, content);
            this._bindStudyEvents();
        } catch (error) {
            console.error('Error cargando estudio:', error);
            this.navigateTo('#home');
        }
    },

    _bindStudyEvents() {
        // Switch de módulos en el menú
        document.querySelectorAll('[data-study-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const studyId = btn.getAttribute('data-study-id');
                this.navigateTo(`#study/${studyId}`);
            });
        });

        // Volver al inicio
        document.getElementById('btn-study-close')?.addEventListener('click', () => this.navigateTo('#home'));

        // Practicar módulo directamente
        document.getElementById('btn-start-quiz-from-study')?.addEventListener('click', (e) => {
            const moduleId = e.currentTarget.getAttribute('data-module-id');
            this.navigateTo(`#quiz/${moduleId}`);
        });
    }
};
