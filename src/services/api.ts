import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/ViniciusFloriano/ensinio-fake-api',
});

export default api;
