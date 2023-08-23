import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

// on importe notre instance custom d'axios
import { axiosInstance } from '../../utils/axios'

// Crée une action pour changer un champ dans le formulaire

export const changeField = createAction('user/changeField')

export const logout = createAction('user/logout')

export const login = createAsyncThunk('user/login', async (_, thunkAPI) => { // _ est racletiflabel est un objet

    // const email = thunkAPI.getState().user.credentials.email
    // const password = thunkAPI.getState().user.credentials.password
    console.log("thunkApi", thunkAPI.getState());
    const { email, password } = thunkAPI.getState().user.credentials
    const { data } = await axiosInstance.post('/login', { email, password })
    console.log(data);

    // Mettre à jour le state 
    

    // data: {
    //     logged: true,
    //     pseudo: 'Burt',
    //     token: 
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU1LCJpYXQiOjE2OTExMzY3NzgsImV4cCI6MTY5MTE0NzU3OH0.vl-zorywO0jTfePjQlZVAACv6rCRCRX-6FFIghF_u10'
    //   },

    localStorage.setItem('user', JSON.stringify(data))

    return data
})

// Action pour la création d'un compte utilisateur
export const register = createAsyncThunk('user/register', async (_, thunkAPI) => {
    const { email, password } = thunkAPI.getState().user.credentials;
    const { data } = await axiosInstance.post('/register', { email, password });
    return data; // Retourne les données du nouvel utilisateur créé
});





