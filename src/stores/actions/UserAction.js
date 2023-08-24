import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// Importe les fonctions createAction et createAsyncThunk de Redux Toolkit.

import { axiosInstance } from '../../utils/axios';
// Importe votre instance personnalisée d'Axios depuis le fichier axios.js.

export const userLogged = createAction('user/userLogged')

// Crée une action Redux pour changer un champ dans le formulaire
export const changeField = createAction('user/changeField');

// Crée une action Redux pour gérer la déconnexion de l'utilisateur
export const logout = createAction('user/logout');

// Crée une action asynchrone (utilisant createAsyncThunk) pour gérer la connexion de l'utilisateur
export const login = createAsyncThunk('user/login', async (_, thunkAPI) => {
  // Le paramètre _ est utilisé pour ignorer le premier argument (payload), thunkAPI contient des utilitaires pour interagir avec le store
  console.log("thunkApi", thunkAPI.getState());

  // Obtient l'email et le mot de passe à partir de l'état
  const { email, password } = thunkAPI.getState().user.credentials;

  // Effectue une requête POST vers /login avec les informations d'identification
  const { data } = await axiosInstance.post('/login', { email, password });

  // Stocke les données utilisateur, y compris le token, dans le local storage
  localStorage.setItem('user', JSON.stringify(data));

  return data; // Retourne les données de l'utilisateur (qui incluent le token)
});

// Action asynchrone pour la création d'un compte utilisateur
// thunkAPI.getState() pour accéder à l'état global du magasin 
export const register = createAsyncThunk('user/register', async (_, thunkAPI) => {
  const { email, password, nom, prenom, profilRisque } = thunkAPI.getState().user.credentials;


  // Effectue une requête POST vers /register avec les informations d'identification
  const { data } = await axiosInstance.post('/register', { email, password, nom, prenom, profilRisque });


  // Rediriger l'utilisateur vers la page de dashboard après l'enregistrement réussi
  thunkAPI.getState().history.push('/dashboard');

  return data; // Retourne les données du nouvel utilisateur créé

  
});
