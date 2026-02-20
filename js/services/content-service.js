/* ============================================================
   CONTENT SERVICE
   Gestión dinámica de módulos, preguntas y contenido de estudio.
   Reemplaza los archivos JS estáticos de la carpeta /data.
   ============================================================ */

import { supabase } from './supabase-client.js';

export const ContentService = {
    // ── Módulos ──
    async getModules() {
        const { data, error } = await supabase
            .from('modules')
            .select('*')
            .order('order', { ascending: true });
        if (error) throw error;

        // Mapear snake_case de DB a camelCase de la App
        return data.map(mod => ({
            ...mod,
            questionCount: mod.question_count,
            timeLimit: mod.time_limit,
            passingScore: mod.passing_score
        }));
    },

    async upsertModule(moduleData) {
        // Mapear de vuelta a snake_case para guardar
        const dbData = {
            ...moduleData,
            question_count: moduleData.questionCount,
            time_limit: moduleData.timeLimit,
            passing_score: moduleData.passingScore
        };
        // Eliminar los originales para evitar conflictos
        delete dbData.questionCount;
        delete dbData.timeLimit;
        delete dbData.passingScore;

        const { data, error } = await supabase
            .from('modules')
            .upsert(dbData)
            .select()
            .single();
        if (error) throw error;
        return data;
    },

    async deleteModule(moduleId) {
        // Eliminar las preguntas asociadas primero
        await supabase.from('questions').delete().eq('module_id', moduleId);
        // Eliminar el contenido de estudio asociado
        await supabase.from('study_content').delete().eq('module_id', moduleId);

        const { error } = await supabase
            .from('modules')
            .delete()
            .eq('id', moduleId);
        if (error) throw error;
        return true;
    },
    async getQuestionsByModule(moduleId) {
        const { data, error } = await supabase
            .from('questions')
            .select('*')
            .eq('module_id', moduleId);
        if (error) throw error;

        // Mapear snake_case (DB) -> camelCase (App)
        return data.map(q => ({
            ...q,
            correctAnswer: q.correct_answer,
            imageUrl: q.image_url
        }));
    },

    async upsertQuestion(questionData) {
        // Mapear camelCase -> snake_case
        const dbData = {
            ...questionData,
            correct_answer: questionData.correctAnswer,
            image_url: questionData.imageUrl
        };
        if (dbData.correctAnswer !== undefined) delete dbData.correctAnswer;
        if (dbData.imageUrl !== undefined) delete dbData.imageUrl;

        const { data, error } = await supabase
            .from('questions')
            .upsert(dbData)
            .select()
            .single();
        if (error) throw error;
        return data;
    },

    async deleteQuestion(questionId) {
        const { error } = await supabase
            .from('questions')
            .delete()
            .eq('id', questionId);
        if (error) throw error;
        return true;
    },

    // ── Contenido de Estudio ──
    async getStudyContent(moduleId) {
        const { data, error } = await supabase
            .from('study_content')
            .select('*')
            .eq('module_id', moduleId)
            .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data;
    },

    async upsertStudyContent(moduleId, content) {
        const { data, error } = await supabase
            .from('study_content')
            .upsert({
                module_id: moduleId,
                sections: [],   // valor por defecto para columna NOT NULL legacy
                ...content
            })
            .select()
            .single();
        if (error) throw error;
        return data;
    }
};
