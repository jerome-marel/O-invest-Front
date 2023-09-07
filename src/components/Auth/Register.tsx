import { NavLink } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';



const containerStyle = {
  background: 'linear-gradient(169deg, rgba(16,14,36,1) 30%, rgba(23,24,80,1) 52%, rgba(49,75,177,1) 93%, rgba(46,50,173,1) 100%)',
  display: 'flex flex-wrap justify-center gap-10',
  flexDirection: 'column',
};


const RegisterForm = () => {
  const Navigate = useNavigate();
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { email, password, passwordConfirm, first_name, last_name } = e.target;
    const selectedRiskProfile = e.target.risk.value;

    if (password.value === passwordConfirm.value) {
      setPasswordsMatch(true);
      try {
        await axiosInstance.post('/api/register', {
          email: email.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value,
          lastName: last_name.value,
          firstName: first_name.value,
          riskProfile: selectedRiskProfile,
        });
        toast.success('Compte créé avec succès. Vous pouvez maintenant vous connecter.');

        Navigate('/login');
      } catch (error) {
        console.error('Error registering:', error);
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordsMatch(e.target.value === e.target.form.password.value);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setHasUppercase(/[A-Z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(password));
    setIsLengthValid(password.length >= 8);
  };


  return (
  <div style={containerStyle} className="bg-gray-100 min-h-screen flex items-center justify-center"> 
    <div className="max-w-md bg-white bg-opacity-10 rounded-2xl p-8 shadow-md ">
      <h2 className="text-2xl font-semibold mb-2 text-white">S'enregistrer</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label htmlFor="last_name" className=" text-white block font-medium mb-1">
            Nom:
          </label>
          <input
            type="text"
            id="last_name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className=" text-white block font-medium mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="first_name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className=" text-white block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className=" text-white block font-medium mb-1">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
            onChange={handlePasswordChange}
          />
          <ul >
            <li className="list-none" style={{ color: hasUppercase ? 'green' : 'red' }}>
              Avoir au moins 1 lettre majuscule
            </li>
            <li style={{ color: hasNumber ? 'green' : 'red' }}>Avoir au moins 1 chiffre</li>
            <li style={{ color: hasSpecialChar ? 'green' : 'red' }}>
              Avoir au moins 1 caractère spécial
            </li>
            <li style={{ color: isLengthValid ? 'green' : 'red' }}>
              Avoir au moins 8 caractères
            </li>
          </ul>
        </div>
        <div className="mb-4 ">
          <label htmlFor="passwordConfirm" className=" text-white block font-medium mb-1">
            Confirmer votre mot de passe :
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
            onChange={handlePasswordConfirmChange}
          />
          {!passwordsMatch && (
            <p className="text-red-500">Les mots de passe ne correspondent pas.</p>
          )}
        </div>
        <fieldset>
        <legend className="font-medium text-white ">Sélectionnez votre profil de risque :</legend>
        <div className=' text-white w-full px-7 py-2'>
          <input type="radio" id="Prudent" name="risk" value="Prudent" defaultChecked />
          <label htmlFor="Prudent">Prudent</label>
        </div>
        <div className=' text-white w-full px-7 py-2'>
          <input type="radio" id="Équilibré" name="risk" value="Équilibré" />
          <label htmlFor="Équilibré">Équilibré</label>
        </div>
        <div className=' text-white w-full px-7 py-2'>
          <input type="radio" id="Dynamique" name="risk" value="Dynamique" />
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
      <p className="mt-2 text-white ">
        Avez-vous déjà un compte ?{' '}
        <NavLink to="/login" className="px-3 text-blue-300 font-semibold">
          Se connecter
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default RegisterForm;
