import axios from 'axios';

const SERVER_URL = 'https://backend-511443014815.europe-west1.run.app';

export const api = axios.create({
  baseURL: SERVER_URL,
});
