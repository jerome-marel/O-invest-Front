import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios'; // Assurez-vous d'avoir axiosInstance configuré
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const Navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
  const email = e.target.email.value;
  const password = e.target.password.value;
  const passwordConfirm = e.target.passwordConfirm.value; 
  const firstName = e.target.firstName.value;
  const lastName = e.target.lastName.value;
  const riskProfile = e.target.riskProfile.value;
  
    try {
       await axiosInstance.post('/register', { email, password, passwordConfirm, firstName, lastName, riskProfile });
      Navigate('/dashboard');
    } catch (error) {
      console.error('Error registering in:', error);
    }
  };

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
            id="lastName"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            name="lastName"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block font-medium mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            name="firstName"
  
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
            name="email"
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
        />
          {/* {password !== passwordConfirm && (
            <p className="text-red-500 mt-2 font-semibold">
              Votre mot de passe ne correspond pas !
            </p> */}
          {/* )} */}
        </div>
        <fieldset>
          <legend className="font-medium">Selectionner votre profil de risque :</legend>
          <div className='w-full px-7 py-2'>
          <input type="radio" id="Prudent" name="riskProfile" value="Prudent"
          />
    
          <label htmlFor="Prudent">Prudent</label>
        </div>

        <div className='w-full px-7 py-2'>
          <input 
          type="radio"
           id="Équilibré"
            name="riskProfile"
            value="Équilibré"
            />
          <label htmlFor="Équilibré">Équilibré</label>
        </div>
 
        <div className='w-full px-7 py-2'>
          <input type="radio" id="Dynamique" name="riskProfile" value="Dynamique" 
          // checked={riskProfile === 'Dynamique'}
           />
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
        Avez-vous déjà un compte ?{' '}
        <NavLink to="/dashboard" className="px-3 text-blue-500 font-semibold">
          Se connecter
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
