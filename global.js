export const urlAPI = 'https://f588-78-241-78-34.ngrok-free.app';

// Initialisation de la variable pour stocker le token
export let accessToken = '';

// Fonction pour mettre à jour le token
export const setAccessToken = (token) => {
    accessToken = token;
};