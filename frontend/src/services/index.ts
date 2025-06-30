import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
