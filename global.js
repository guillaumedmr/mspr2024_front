export const urlAPI = 'https://19d2-2a01-e0a-d08-7120-58bf-4062-693d-fc59.ngrok-free.app';

// Initialisation de la variable pour stocker le token
export let accessToken = '';

// Fonction pour mettre à jour le token
export const setAccessToken = (token) => {
    accessToken = token;
};