import axios from 'axios';

const server = 'https://www.omdbapi.com';

const apiService = axios.create({
  baseURL: server,
  responseType: 'json',
});

export default apiService;
