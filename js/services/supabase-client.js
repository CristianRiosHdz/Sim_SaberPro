/* ============================================================
   SUPABASE CLIENT
   Inicialización del cliente Supabase v2 via CDN.
   ============================================================ */

/**
 * IMPORTANTE: Reemplaza estos valores con tus credenciales de Supabase
 * obtenidas en el Dashboard: Settings > API
 */
const SUPABASE_URL = 'https://yfbguwvcmuzjfuaiorwy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYmd1d3ZjbXV6amZ1YWlvcnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMDYxMDQsImV4cCI6MjA4NjY4MjEwNH0._X461ZHZtS-zenglpMH75kGbN8_V4DMrER9r3Mx0Wb0';

// Cargamos supabase desde el objeto global que define el script en index.html
// o mediante un import dinámico si se prefiere. 
// Para ES modules puros, usamos el import directo de la CDN.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
