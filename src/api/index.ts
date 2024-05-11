import endpoints from '@/constants/endpoints';
import axios from 'axios';

const api = axios.create({ baseURL: endpoints.baseURL });

export default api;
