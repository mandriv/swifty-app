import { AsyncStorage } from 'react-native';
import moment from 'moment';

import { store } from '../redux/store';
import * as HealthData from '../config/HealthData';
import * as Geo from '../config/GeolocationHelpers';
import { updateStats } from './fitnessData';

export const SYNC_THROTTLE = 1; // minute

export const syncData = async (force = false) => {
  try {
    const lastSync = await AsyncStorage.getItem('lastSync');
    if (lastSync !== null && force === false) {
      const lastSyncMom = moment(lastSync);
      if (!moment().isAfter(lastSyncMom.add(SYNC_THROTTLE, 'minutes'))) {
        return;
      }
    }
    await AsyncStorage.setItem('lastSync', moment().format());
  } catch (err) {
    console.log(err); // eslint-disable-line
    return;
  }
  try {
    const distance = await Geo.getTodaysDistance();
    const speed = await Geo.getTodaysAverageSpeed();
    let steps = null;
    let calories = null;
    try {
      steps = await HealthData.getTodaysSteps();
      calories = steps / HealthData.STEPS_PER_CALORIE;
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
    // get token and user
    const state = store.getState();
    const { token, user } = state;
    let requestForm = {
      distance,
      avarage_speed: speed,
    };
    if (steps && calories) {
      requestForm = {
        ...requestForm,
        steps,
        calories,
      };
    }
    await updateStats(user.id, token, requestForm);
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
};

export default syncData;
