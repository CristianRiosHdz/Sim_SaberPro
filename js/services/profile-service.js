/* ============================================================
   PROFILE SERVICE
   Manejo de perfiles de usuario extendidos en Supabase.
   ============================================================ */

import { supabase } from './supabase-client.js';

export const ProfileService = {
    /**
     * Obtiene el perfil de un usuario por su ID.
     */
    async getProfile(userId) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (error && error.code !== 'PGRST116') throw error; // PGRST116 es "no rows found"
        return data;
    },

    /**
     * Crea o actualiza el perfil de un usuario.
     */
    async upsertProfile(profileData) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('No hay usuario autenticado.');

        const { data, error } = await supabase
            .from('profiles')
            .upsert({
                id: user.id,
                email: user.email,
                ...profileData,
                updated_at: new Date().toISOString()
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    /**
     * Verifica si el usuario actual es administrador.
     */
    async isAdmin() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;

        const profile = await this.getProfile(user.id);
        return profile?.is_admin || false;
    },

    /**
     * Obtiene todos los usuarios con sus estadísticas resumidas (solo para admins).
     */
    async getAllUsersWithStats() {
        try {
            // Intentar obtener perfiles
            const { data: profiles, error: pError } = await supabase
                .from('profiles')
                .select('*')
                .order('full_name', { ascending: true });

            if (pError) {
                console.error('[ProfileService] Error al obtener perfiles:', pError);
                // Si es un error de RLS o permisos, lanzamos algo legible
                if (pError.code === '42501') {
                    throw new Error('No tienes permisos suficientes para ver la lista de estudiantes. Verifica las políticas RLS en Supabase.');
                }
                throw pError;
            }

            // Intentar obtener intentos
            const { data: attempts, error: aError } = await supabase
                .from('exam_attempts')
                .select('user_id, module, score, created_at');

            if (aError) {
                console.warn('[ProfileService] No se pudieron cargar las estadísticas detalladas:', aError);
                // No bloqueamos toda la vista si fallan solo los intentos, pero notificamos
            }

            const attemptsData = attempts || [];

            // Combinar datos
            return profiles.map(profile => {
                const userAttempts = attemptsData.filter(a => a.user_id === profile.id);
                return {
                    ...profile,
                    totalAttempts: userAttempts.length,
                    bestResults: userAttempts.reduce((acc, curr) => {
                        if (!acc[curr.module] || curr.score > acc[curr.module]) {
                            acc[curr.module] = curr.score;
                        }
                        return acc;
                    }, {})
                };
            });
        } catch (error) {
            console.error('[ProfileService] Error crítico en getAllUsersWithStats:', error);
            throw error;
        }
    }
};
