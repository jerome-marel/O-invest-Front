import { NavLink } from 'react-router-dom';
import  { useState } from 'react';

const LandingPage = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <p className="mb-4">Bienvenue sur notre site.</p>
      <NavLink
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Se connecter
      </NavLink>

      <div className="mt-8 bg-blue-500 m-10 p-5 rounded">
        <h2 className="text-xl font-semibold mb-2">Nous contacter</h2>
        {isMessageSent ? (
          <p className="text-green-500">Message bien envoyé !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Nom:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
