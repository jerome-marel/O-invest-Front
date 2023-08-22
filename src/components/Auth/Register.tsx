import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Implémentez ici la logique d'enregistrement dans la base de données

    console.log('Sign Up:', email, password);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded bg-indigo-300 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password !== confirmPassword && (
            <p className="text-red-500 mt-2">Passwords do not match</p>
          )}
        </div>
        <div>
          <NavLink
            to='/Dashboard'
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Create Account
          </NavLink>
        </div>
      </form>
      <p>
        Already have an account ?
        <NavLink to="/Login" className="text-red-500 font-semibold">
          Login here
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
