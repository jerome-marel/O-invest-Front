import { useState } from 'react';
import { NavLink} from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  


  return (
    <div className="max-w-sm mx-auto p-4 rounded shadow bg-indigo-300">
      <h2 className="text-2xl mb-4">Login </h2>
      <form>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded "
          />
        </div>
        <div className="mb-4 w-full">
          <NavLink
            
            to="/Dashboard"
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
            >
                Login
        </NavLink>
        </div>
      </form>
      <p>
        Don't have an account yet?{' '}
        <NavLink  to="/Register" className="text-red-500 font-semibold">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
