import { Route, Routes } from 'react-router-dom';
// import { ResetPasswordPage } from '@features/auth/pages/ResetPasswordPage';
import { LoginPage } from '../pages/Login';
import { ForgotPasswordPage } from '@/features/auth/pages/ForgotPassword';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
    </Routes>
  );
}
