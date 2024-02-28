export const urlAPI = 'https://341e-37-166-13-232.ngrok-free.app';

// Initialisation de la variable pour stocker le token
export let accessToken = '';

// Fonction pour mettre à jour le token
export const setAccessToken = (token) => {
    accessToken = token;
};