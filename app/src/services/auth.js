import axios from 'axios';
import Config from 'react-native-config';

export const register = async (form) => {
  try {
    const response = await axios.post(`${Config.HOST}/api/users`, form);
    console.log(response);
  } catch (error) {
    console.warn(error);
  }
}

export const login = async (form) => {
  try {
    const response = await axios.post(`${Config.HOST}/api/users`, form);
    console.log(response);
  } catch (error) {
    console.warn(error);
  }
}
