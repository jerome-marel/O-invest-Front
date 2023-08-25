import axios from 'axios'

// on crée une instance avec une URL de base, on aura juste à compléter l'URL au besoin, lorsqu'on effectuera des requêtes
// ex : axiosInstance.get('/recipes') fera une requete sur 'http://localhost:3001/recipes' 
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

// on peut aussi utiliser un middleware pour configurer notre requête avant de l'envoyer
axiosInstance.interceptors.request.use((config) => {

    // ici le MW essaye de récupérer le user dans le storage
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user);

    // si il le trouve, il ajoute un headers Authorization avec comme valeur le token du localstorage
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }

    return config;
})

// * On utilise cette instance dans userActions.js et recipesActions.js
