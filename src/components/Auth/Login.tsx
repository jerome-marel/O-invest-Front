import { axiosInstance } from '../../utils/axios'; // Assurez-vous d'avoir axiosInstance configuré
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Verif.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const Navigate = useNavigate();
  


  const containerStyle = {
    background: 'linear-gradient(169deg, rgba(16,14,36,1) 30%, rgba(23,24,80,1) 52%, rgba(49,75,177,1) 93%, rgba(46,50,173,1) 100%)',
    display: 'flex flex-wrap justify-center gap-10',
    flexDirection: 'column',
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const response = await axiosInstance.post('/api/login', { email, password });
    
      if (response.data.token) {
        // Authentification réussie, redirigez l'utilisateur
        localStorage.setItem('user', JSON.stringify({ token: response.data.token }));
        const userId = response.data.user;
        localStorage.setItem('userId', userId); 
        Navigate('/dashboard');
      } else {
        // Affichez un message d'erreur générique en cas d'erreur côté serveur
        console.error('Login failed');
        toast.error('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
  
      if (error.response) {
        // Affichez un message d'erreur spécifique en fonction du code d'erreur de la réponse du serveur
        if (error.response.status === 400) {
          toast.error('Email au format invalide');
        } else if (error.response.status === 401) {
          toast.error('Email ou mot de passe incorrect');
        } else {
          toast.error('Une erreur s\'est produite lors de la connexion');
        }
      } else {
        toast.error('Une erreur s\'est produite lors de la connexion');
      }
    }
  };

  return (
    <div style={containerStyle} className="flex items-center justify-center min-h-screen bg-gray-100">
       <ToastContainer />
      <div className="bg-white bg-opacity-10 rounded-2xl p-8 shadow-md w-96">
      
        
        <h2 className="text-2xl font-semibold mb-4 text-white">Se Connecter</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className=" text-white block text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className=" text-white block text-sm font-medium mb-1">
              Mot de Passe:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
          >
            Se Connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-white ">
          Créer vous un compte ?{' '}
          <NavLink to="/register" className="text-blue-300 font-semibold">
            S'enregistrer
          </NavLink>
        </p>
      </div>
    </div>
    
  );
  
};

export default Login;
