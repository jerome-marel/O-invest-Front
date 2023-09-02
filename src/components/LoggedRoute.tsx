import { Navigate } from 'react-router-dom';

const LoggedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !user.token) {
    
    return <Navigate to="/login" />;
  }
  return children;
};

export default LoggedRoute;