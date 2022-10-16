import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage';
import { MainConfigsPage } from '../pages/MainConfigsPage/MainConfigsPage';
import { PasswordPage } from '../pages/Password/PasswordPage';
import { PlayBookPage } from '../pages/PlayBook/PlayBookPage';
import { SecurityPage } from '../pages/Security/SecurityPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/main_configs/:type" element={<MainConfigsPage />} />
      <Route path="/playbook" element={<PlayBookPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/password" element={<PasswordPage />} />
    </Routes>
  );
};

export default App;
