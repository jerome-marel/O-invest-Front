import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import DashBoardPage from './pages/dashboard/Dashboard';
import Header from './components/Menu/Menu';



const PageWithHeader = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<PageWithHeader><DashBoardPage /></PageWithHeader>} />


         
      </Routes>
    </div>
  );
};

export default App;