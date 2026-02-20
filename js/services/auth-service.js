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
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
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
     * Escucha cambios en el estado de autenticación.
     * @param {Function} callback 
     */
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange((event, session) => {
            callback(event, session);
        });
    }
};
