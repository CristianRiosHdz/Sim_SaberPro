/* ============================================================
   AUTH SERVICE
   Manejo de autenticación con Supabase.
   ============================================================ */

import { supabase } from './supabase-client.js';

export const AuthService = {
    /**
     * Registra un nuevo usuario con email y contraseña.
     * @param {string} email 
     * @param {string} password 
     */
    async register(email, password) {
        // Obtenemos la URL base actual para la redirección tras confirmar correo
        const baseUrl = window.location.origin + window.location.pathname;
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                // Supabase redirigirá aquí tras hacer clic en el botón del correo
                emailRedirectTo: `${baseUrl}#profile-setup`,
            }
        });
        if (error) throw error;
        return data;
    },

    /**
     * Inicia sesión con email y contraseña.
     * @param {string} email 
     * @param {string} password 
     */
    async login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    },

    /**
     * Cierra la sesión del usuario actual.
     */
    async logout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    /**
     * Obtiene el usuario autenticado actualmente.
     * @returns {Promise<Object|null>}
     */
    async getCurrentUser() {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    },

    /**
     * Obtiene la sesión actual.
     * @returns {Promise<Object|null>}
     */
    async getSession() {
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    },

    /**
     * Envía un correo para restablecer la contraseña.
     */
    async requestPasswordReset(email) {
        // Obtenemos la URL base actual (ej: https://user.github.io/app/)
        const baseUrl = window.location.origin + window.location.pathname;
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${baseUrl}#reset-password`,
        });
        if (error) throw error;
    },

    /**
     * Actualiza la contraseña del usuario actual (usado tras reset).
     */
    async updatePassword(newPassword) {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        });
        if (error) throw error;
    },

    /**
     * Escucha cambios en el estado de autenticación.
     * @param {Function} callback 
     */
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange((event, session) => {
            callback(event, session);
        });
    }
};
