import axios from 'axios'

// on crée une instance avec une URL de base, on aura juste à compléter l'URL au besoin, lorsqu'on effectuera des requêtes
// ex : axiosInstance.get('/recipes') fera une requete sur 'http://localhost:3001/recipes' 
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

// on peut aussi utiliser un middleware pour configurer notre requête avant de l'envoyer
axiosInstance.interceptors.request.use((config) => {

    // ici le MW essaye de récupérer le user dans le storage
    const user = JSON.parse(localStorage.getItem('user'));

    

    // si il le trouve, il ajoute un headers Authorization avec comme valeur le token du localstorage
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }

    return config;
})




// * On utilise cette instance dans userActions.js et recipesActions.js


// Cependant, il y a un petit point à noter : dans l'intercepteur, vous accédez au token du local storage en utilisant
//  la clé "user.token". Cela signifie que vous attendez que l'objet stocké dans le local storage soit de la forme { "token": "votre_token_jwt" }.

// Assurez-vous que lors de la connexion et du stockage du token dans le local storage,
//  vous l'enregistrez sous la clé "user" et que vous avez correctement formé l'objet avec la propriété "token".