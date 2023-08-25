import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../../utils/axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [risk_profile, setrisk_profile] =useState('')
  

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      const register = createAsyncThunk('/register', async (_, thunkAPI) => {
        const { email, password,passwordConfirm, last_name, first_name, risk_profile,  } = thunkAPI.getState().user.credentials;
        // Effectue une requête POST vers /register avec les informations d'identification
        const { data } = await axiosInstance.post('/register', { email, password, passwordConfirm, last_name, first_name, risk_profile });
        return data; // Retourne les données du nouvel utilisateur créé
      
        
      });
        
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value === passwordConfirm) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlepasswordConfirm = (e) => {
    setpasswordConfirm(e.target.value);

    if (e.target.value === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded bg-indigo-300 shadow-md">
      <h2 className="text-2xl font-semibold mb-2">S'enregistrer</h2>
      <form onSubmit={handleSignUp}>
      <div className="mb-4">
          <label htmlFor="last_name" className="block font-medium mb-1">
            Nom:
          </label>
          <input
            type="text"
            id="last_name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={last_name}
            onChange={(e) => setlast_name(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block font-medium mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="first_name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)}
          />
        </div>
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
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={password}
            onChange={handlePassword}
          />
        </div>
        
    
        <div className="mb-4">
          <label htmlFor="passwordConfirm" className="block font-medium mb-1">
            Confirmer votre mot de passe :
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            value={passwordConfirm}
            onChange={handlepasswordConfirm}
          />
          {!passwordsMatch && (
            <p className="text-red-500 mt-2">Votre mot de passe ne correspond pas !</p>
          )}
        </div>
        <fieldset>
          <legend className='font-medium'>Selectionner votre profil de risque :</legend>

          <div className='w-full px-7 py-2'>
          <input type="radio" id="Prudent" name="risk" value="Prudent"
          checked={risk_profile === 'Prudent'}
          onChange={() => setrisk_profile('Prudent')} />
          <label htmlFor="Prudent">Prudent</label>
        </div>

        <div className='w-full px-7 py-2'>
          <input 
          type="radio"
           id="Équilibré"
            name="risk"
             value="Équilibré" 
             checked={risk_profile === 'Equilibre'}
              onChange={() => setrisk_profile('Equilibre')}/>
          <label htmlFor="Équilibré">Équilibré</label>
        </div>
 
        <div className='w-full px-7 py-2'>
          <input type="radio" id="Dynamique" name="risk" value="Dynamique" 
          checked={risk_profile === 'Dynamique'}
          onChange={() => setrisk_profile('Dynamique')} />
          <label htmlFor="Dynamique">Dynamique</label>
        </div>
        </fieldset>
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Créer votre compte
        </button>
        
      </form>
      <p className="mt-2">
        Avez-vous déjà un compte ? 
        <NavLink to="/login" className="px-3 text-blue-500 font-semibold">
           Se connecter
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;

