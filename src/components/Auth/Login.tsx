import { axiosInstance } from '../../utils/axios'; // Assurez-vous d'avoir axiosInstance configuré
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      const response = await axiosInstance.post('/login', { email, password });
  
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify({ token: response.data.token }));
        const userId = response.data.user; // Utilisez response.data.user.id au lieu de userId
        console.log("userId", userId);
        console.log("Token", response.data.token);
        console.log(response.data.user)
        localStorage.setItem('userId', userId); 
        
        // Utilisez userId comme nécessaire, par exemple :
        // Naviguez vers la page du tableau de bord ou effectuez d'autres actions en fonction de l'ID
        Navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Se Connecter</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
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
            <label htmlFor="password" className="block text-sm font-medium mb-1">
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
        <p className="mt-4 text-sm">
          Créer vous un compte ?{' '}
          <NavLink to="/register" className="text-blue-500 font-semibold">
            S'enregistrer
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
