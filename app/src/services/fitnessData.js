import axios from 'axios';
import Config from 'react-native-config';

export const updateStepsAndCalories = (userId, token, data) =>
  axios.put(`${Config.HOST}/api/stats/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const incrementDistance = (userId, distanceInc) =>
  axios.put(`${Config.HOST}/api/stats/${userId}/increment`, {
    distance: distanceInc,
  });
