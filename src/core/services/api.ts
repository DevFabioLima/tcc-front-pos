import axios from 'axios';

const api = axios.create({
  baseURL: 'https://core-back-sogefi.herokuapp.com/api/v1/',
});

export default api;
