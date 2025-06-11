import axios from 'axios';

// const SERVER_URL = 'https://backend-511443014815.europe-west1.run.app/';
const SERVER_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
