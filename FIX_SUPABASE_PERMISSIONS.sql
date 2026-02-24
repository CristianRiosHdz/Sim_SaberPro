-- ==========================================
-- SOLUCIÓN BUG: VISIBILIDAD DE ESTUDIANTES (VERSIÓN ESTABLE)
-- ==========================================

-- 1. LIMPIEZA TOTAL DE POLÍTICAS PREVIAS
DROP POLICY IF EXISTS "Admins pueden ver todos los perfiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins pueden ver todos los intentos" ON public.exam_attempts;
DROP POLICY IF EXISTS "Ver perfil propio" ON public.profiles;
DROP POLICY IF EXISTS "Admins ven todo" ON public.profiles;
DROP POLICY IF EXISTS "Usuarios actualizan su perfil" ON public.profiles;
DROP POLICY IF EXISTS "Ver intentos propios" ON public.exam_attempts;
DROP POLICY IF EXISTS "Admins ven todos los intentos" ON public.exam_attempts;

-- 2. FUNCIÓN DE SEGURIDAD PARA EVITAR RECURSIÓN
CREATE OR REPLACE FUNCTION public.check_is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN (SELECT is_admin FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. POLÍTICAS DE PERFILES
CREATE POLICY "Ver perfil propio" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Admins ven todo" ON public.profiles FOR SELECT USING (public.check_is_admin());
CREATE POLICY "Usuarios actualizan su perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 4. POLÍTICAS DE INTENTOS
CREATE POLICY "Ver intentos propios" ON public.exam_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins ven todos los intentos" ON public.exam_attempts FOR SELECT USING (public.check_is_admin());

-- 5. TRIGGER AUTOMÁTICO PARA NUEVOS USUARIOS
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, is_admin)
  VALUES (new.id, new.email, false);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
