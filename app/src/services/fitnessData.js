import axios from 'axios';
import Config from 'react-native-config';
import moment from 'moment';

export const updateStats = (userId, token, data) =>
  axios.put(`${Config.HOST}/api/stats/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodayStats = (userId, token) => {
  const year = moment().year().toString().padStart(2, '0');
  const month = moment().month().toString().padStart(2, '0');
  const day = moment().date().toString().padStart(2, '0');

  const url = `${Config.HOST}/api/stats/${userId}/${year}/${month}/${day}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getYesterdayStats = (userId, token) => {
  const yesterday = moment().subtract(1, 'day');
  const year = yesterday.year().toString().padStart(2, '0');
  const month = yesterday.month().toString().padStart(2, '0');
  const day = yesterday.date().toString().padStart(2, '0');

  const url = `${Config.HOST}/api/stats/${userId}/${year}/${month}/${day}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTodaysPercentile = (userId, token) => {
  const url = `${Config.HOST}/api/users/${userId}/todays-percentile`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default updateStats;
