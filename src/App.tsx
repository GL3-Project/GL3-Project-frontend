import './App.css';
import { AppProvider } from '@/providers/app';
import AppRoutes from '@/routes/AppRoutes';
import './assets/css/App.css';
// eslint-disable-next-line import/order

function App() {
  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}

export default App;
