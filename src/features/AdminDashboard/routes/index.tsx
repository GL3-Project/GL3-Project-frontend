import { Route, Routes } from 'react-router-dom';
import MainDashboard from '@/views/admin/default';

function AdminDashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />;
    </Routes>
  );
}
export default AdminDashboardRoutes;
