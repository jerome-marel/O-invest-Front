import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import DashBoardPage from './pages/dashboard/Dashboard';
import Header from './components/Menu/Menu';
import Profil from './components/Profil/Profil'
import PortfolioDetail from './components/Portfolio/PortfolioDetail';
import LoggedRoute from './components/LoggedRoute';



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

       
        <Route
          path="/dashboard"
          element={
            <LoggedRoute>
              <PageWithHeader>
                <DashBoardPage />
              </PageWithHeader>
            </LoggedRoute>
          }
        />

        <Route
          path="/portfolio/:portfolioId"
          element={
            <LoggedRoute>
              <PageWithHeader>
                <PortfolioDetail />
              </PageWithHeader>
            </LoggedRoute>
          }
        />

        <Route
          path="/dashboard/portfolio/:portfolioId"
          element={
            <LoggedRoute>
              <PageWithHeader>
                <PortfolioDetail />
              </PageWithHeader>
            </LoggedRoute>
          }
        />

        <Route
          path="/profil"
          element={
            <LoggedRoute>
              <PageWithHeader>
                <Profil />
              </PageWithHeader>
            </LoggedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;