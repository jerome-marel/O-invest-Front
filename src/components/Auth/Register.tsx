import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../stores/actions/UserAction';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(register());
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded bg-indigo-300 shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Register</h2>
      <form onSubmit={handleSignUp}>
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
            onChange={handlePasswordChange}
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
            onChange={handleConfirmPasswordChange}
          />
          {!passwordsMatch && (
            <p className="text-red-500 mt-2">Passwords do not match</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Create Account
        </button>
      </form>
      <p className="mt-2">
        Already have an account?
        <NavLink to="/login" className="text-blue-500 font-semibold">
          Login here
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;

