import { createReducer } from '@reduxjs/toolkit';
import { changeField, login, logout, register } from '../actions/UserAction';

// Récupération des données utilisateur depuis le local storage savoir si il est co ou pas 
const localUser = JSON.parse(localStorage.getItem('user'));

// État initial de l'utilisateur
export const initialState = {
  logged: false, // Indique si l'utilisateur est connecté ou non
  credentials: {
    email: '',
    password: ''
  }, // Informations d'identification (email, mot de passe)
  
  token: undefined, // Le token d'authentification de l'utilisateur
  ...localUser // Intégration des données utilisateur du local storage (s'il y en a)
};

// Création du gestionnaire de réduction
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      const { name, value } = action.payload;
      // Modification des champs d'authentification en fonction des actions changeField
      state.credentials[name] = value;
    })
    .addCase(login.fulfilled, (state, action) => {
      // Mise à jour de l'état après une connexion réussie
      state.logged = true;
      state.pseudo = action.payload.pseudo; // Le payload est généralement utilisé pour transporter les données nécessaires à la modification de l'état
      state.token = action.payload.token;
      state.credentials = {
        email: '',
        password: ''
      };
    })
    .addCase(logout, (state) => {
      // Gestion de la déconnexion (suppression des données utilisateur du local storage)
      localStorage.removeItem('user');
      state.pseudo = undefined;
      state.logged = false;
      state.token = undefined;
    })

    .addCase(register.fulfilled, (state, action) => {
      // Mise à jour de l'état après un enregistrement réussi
      state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
      state.credentials = {
        email: '',
        password: ''
      };
    });
});

export default userReducer;
