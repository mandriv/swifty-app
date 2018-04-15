import { AsyncStorage } from 'react-native';
import moment from 'moment';

export const getTodaysDistance = async () => {
  try {
    const dataStr = await AsyncStorage.getItem('geolocation');
    if (dataStr === null) return 0;
    const data = JSON.parse(dataStr);
    console.log(data); // eslint-disable-line
    const yesterdayLastLoc = getYesterdaysLastLocation(data);
    const mostRecentLoc = getMostRecentLocation(data);
    if (yesterdayLastLoc === null && mostRecentLoc === null) {
      return 0;
    }
    if (yesterdayLastLoc === null) {
      return mostRecentLoc.distance;
    }
    return mostRecentLoc.distance - yesterdayLastLoc.distance;
  } catch (err) {
    console.log(err); // eslint-disable-line
    return 0;
  }
};

export const getTodaysAverageSpeed = async () => {
  try {
    const dataStr = await AsyncStorage.getItem('geolocation');
    if (dataStr === null) return 0;
    const data = JSON.parse(dataStr);
    const todays = getTodaysLocations(data);
    if (todays.length === 0) return 0;
    const total = todays.reduce((acc, loc) => {
      if (loc.speed > 0) {
        return acc + loc.speed;
      }
      return acc;
    }, 0);
    return total / todays.length;
  } catch (err) {
    console.log(err); // eslint-disable-line
    return 0;
  }
};

export const getMostRecentLocation = (locations) => {
  let mostRecentLoc = null;
  let currentRecent = moment('01/01/1900', 'DD/MM/YYYY');
  // eslint-disable-next-line
  for (const loc of locations) {
    const momentDate = moment(loc.timestamp);
    if (momentDate.isAfter(currentRecent)) {
      mostRecentLoc = loc;
      currentRecent = momentDate;
    }
  }
  return mostRecentLoc;
};

export const getYesterdaysLastLocation = (locations) => {
  const format = 'DD/MM/YYYY';
  const todayDate = moment().format(format);
  const todayMoment = moment(todayDate, format);
  const yesterdayMoment = todayMoment.subtract(1, 'day');

  let yesterdayLastLoc = null;
  let currentMoment = yesterdayMoment;
  // eslint-disable-next-line
  for (const loc of locations) {
    const momentDate = moment(loc.timestamp);
    if (momentDate.isAfter(currentMoment) && momentDate.isBefore(todayMoment)) {
      yesterdayLastLoc = loc;
      currentMoment = momentDate;
    }
  }
  return yesterdayLastLoc;
};

export const getTodaysLocations = locations =>
  locations.filter(loc => moment(loc.timestamp).isSame(moment(), 'day'));
