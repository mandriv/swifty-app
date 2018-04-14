import axios from 'axios';
import Config from 'react-native-config';

export const updateStats = (userId, token, data) =>
  axios.put(`${Config.HOST}/api/stats/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default updateStats;
