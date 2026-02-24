-- ==========================================
-- SOLUCIÓN BUG: VISIBILIDAD DE ESTUDIANTES
-- Ejecuta este SQL en el Dashboard de Supabase
-- (SQL Editor -> New Query -> Run)
-- ==========================================

-- 1. Habilitar que los Admins puedan ver a todos los usuarios
-- Sin esto, el admin solo puede verse a sí mismo por las reglas RLS por defecto.
CREATE POLICY "Admins pueden ver todos los perfiles" 
ON public.profiles 
FOR SELECT 
USING (
  (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
);

-- 2. Habilitar que los Admins puedan ver todos los resultados de exámenes
CREATE POLICY "Admins pueden ver todos los intentos" 
ON public.exam_attempts 
FOR SELECT 
USING (
  (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
);

-- 3. AUTOMATIZACIÓN: Crear perfil automáticamente al registrarse
-- Esto garantiza que el estudiante aparezca en la lista incluso si no ha 
-- completado el formulario de perfil.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, last_name, is_admin)
  VALUES (new.id, new.email, 'Nuevo', 'Estudiante', false);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Borrar el trigger si ya existe para evitar errores al re-ejecutar
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ==========================================
-- ¡Listo! Una vez ejecutado, refresca el Panel de Admin.
-- ==========================================
