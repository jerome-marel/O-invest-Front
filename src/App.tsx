import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import DashBoardPage from './pages/dashboard/Dashboard';
import Header from './components/Menu/Menu';
import Profil from './components/Profil/Profil'
import PortfolioDetail from './components/Portfolio/PortfolioDetail';



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


        <Route path="/portfolio/:portfolioId" element={<PageWithHeader> <PortfolioDetail /> </PageWithHeader>} />

        <Route path="/profil" element={<PageWithHeader><Profil /></PageWithHeader>} />


         
      </Routes>
    </div>
  );
};

export default App;