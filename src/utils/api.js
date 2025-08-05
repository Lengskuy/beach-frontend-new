import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Make sure it matches your FastAPI address
});

export default api;
