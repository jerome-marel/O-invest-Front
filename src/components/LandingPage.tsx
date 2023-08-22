import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <p className="mb-4">Bienvenue sur notre site.</p>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Se connecter
      </Link>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Nous contacter</h2>
        <form>
          
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
