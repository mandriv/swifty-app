import BackgroundGeolocation from 'react-native-background-geolocation';
import { AsyncStorage } from 'react-native';

import { store } from '../redux/store';
import { syncData } from '../services/sync';

export const geolocationConfig = {
  reset: true,
  // Gelocation config
  desiredAccuracy: 0,
  distanceFilter: 25,
  stationaryRadius: 25,
  desiredOdometerAccuracy: 10,
  activityRecognitionInterval: 0,
  debug: true,
  logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
  stopOnTerminate: false,
  startOnBoot: true,
  foregroundService: true,
};

export const init = () => {
  // only log if user is logged in
  const state = store.getState();
  const { user } = state;
  if (!user.id) return;
  // This handler fires whenever bgGeo receives a location update.
  BackgroundGeolocation.on('location', onLocation, onError);
  // ready? start!
  BackgroundGeolocation.ready(geolocationConfig, (geoLocState) => {
    console.log(geoLocState);
    if (!geoLocState.enabled) BackgroundGeolocation.start();
  });
};

export const isWalking = (location) => {
  const { type, confidence } = location.activity;
  const rightType = (type === 'on_foot' || type === 'walking' || type === 'running' || type === 'unknown');
  return rightType && confidence > 50;
};

export const onLocation = async (location) => {
  if (!isWalking(location)) return;
  const state = store.getState();
  const { user } = state;
  const locationObj = {
    user: user.id,
    timestamp: location.timestamp,
    id: location.uuid,
    lat: location.coords.latitude,
    long: location.coords.longitude,
    speed: location.coords.speed,
    distance: location.odometer,
  };
  // save this to local storage - redux might not be accessible
  try {
    const data = await AsyncStorage.getItem('geolocation');
    // if no previous data
    if (data === null) {
      await AsyncStorage.setItem('geolocation', JSON.stringify([locationObj]));
      return;
    }
    // got data - convert to object
    const dataArr = JSON.parse(data);
    // add location
    dataArr.push(locationObj);
    // store it
    await AsyncStorage.setItem('geolocation', JSON.stringify(dataArr));
  } catch (err) {
    console.log(err);
  }
  // sync data
  syncData();
};

export const onError = (err) => {
  console.error(err); // eslint-disable-line
};
