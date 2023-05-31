import { Route, Routes } from 'react-router-dom';
// import { ForgotPasswordPage } from '@features/auth/pages/ForgotPasswordPage';
// import { ResetPasswordPage } from '@features/auth/pages/ResetPasswordPage';
import { LoginPage } from '../pages/Login';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      {/* <Route path="forgotPassword" element={<ForgotPasswordPage />} /> */}
      {/* <Route path="resetPassword" element={<ResetPasswordPage />} /> */}
    </Routes>
  );
}
