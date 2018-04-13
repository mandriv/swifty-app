import axios from 'axios';
import Config from 'react-native-config';

export const register = form => axios.post(`${Config.HOST}/api/users`, form);
export const login = form => axios.post(`${Config.HOST}/api/auth/login`, form);
