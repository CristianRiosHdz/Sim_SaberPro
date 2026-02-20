/* ============================================================
   EXAM SERVICE
   Manejo de persistencia de intentos de examen en Supabase.
   ============================================================ */

import { supabase } from './supabase-client.js';

export const ExamService = {
    /**
     * Guarda un intento de examen en la tabla 'exam_attempts'.
     * @param {Object} data - { module, score, total_questions, answers }
     */
    async saveExamAttempt(data) {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            throw new Error('Debes estar autenticado para guardar resultados.');
        }

        const { error } = await supabase
            .from('exam_attempts')
            .insert([
                {
                    user_id: user.id,
                    module: data.module,
                    score: data.score,
                    total_questions: data.total_questions,
                    answers: data.answers,
                }
            ]);

        if (error) throw error;
    },

    /**
     * Obtiene todos los intentos de un usuario.
     * @param {string} userId 
     */
    async getUserExamAttempts(userId) {
        const { data, error } = await supabase
            .from('exam_attempts')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    /**
     * Obtiene un intento específico por su ID.
     * @param {string} id 
     */
    async getExamAttemptById(id) {
        const { data, error } = await supabase
            .from('exam_attempts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    },

    /**
     * Obtiene los mejores puntajes por módulo para un usuario.
     * Esto ayuda a mantener la lógica de "mejor resultado" que tenía localStorage.
     * @param {string} userId 
     */
    async getBestResults(userId) {
        const { data, error } = await supabase
            .from('exam_attempts')
            .select('module, score, total_questions, created_at')
            .eq('user_id', userId);

        if (error) throw error;

        // Reducir a un mapa de modulo -> mejor resultado
        return data.reduce((acc, current) => {
            if (!acc[current.module] || current.score > acc[current.module].score) {
                // Derivar correctAnswers: score% de total_questions
                const correctAnswers = current.total_questions
                    ? Math.round((current.score / 100) * current.total_questions)
                    : undefined;
                acc[current.module] = {
                    ...current,
                    totalQuestions: current.total_questions,
                    correctAnswers
                };
            }
            return acc;
        }, {});
    },

    /**
     * Elimina todos los intentos de un usuario para un módulo específico.
     * Usa una función RPC con SECURITY DEFINER para bypassear las políticas RLS,
     * ya que un usuario normal no puede borrar registros de otros usuarios.
     */
    async deleteUserModuleAttempts(userId, moduleId) {
        const { error } = await supabase.rpc('admin_reset_module_progress', {
            target_user_id: userId,
            target_module_id: moduleId
        });

        if (error) {
            console.error('[ExamService] RPC error:', error);
            throw new Error(error.message || 'Error en la función RPC. Asegúrate de que esté creada en Supabase.');
        }
        return true;
    }
};
