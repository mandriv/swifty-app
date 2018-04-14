import { store } from '../redux/store';

import * as HealthData from '../config/HealthData';
import * as Geo from '../config/GeolocationHelpers';
import { updateStats } from './fitnessData';

export const syncData = async () => {
  try {
    const distance = await Geo.getTodaysDistance();
    const speed = await Geo.getTodaysAverageSpeed();
    const steps = await HealthData.getTodaysSteps();
    const calories = steps / HealthData.STEPS_PER_CALORIE;
    // get token and user
    const state = store.getState();
    const { token, user } = state;
    const response = await updateStats(user.id, token, {
      steps,
      calories,
      distance,
      average_speed: speed,
    });
    console.log(response); // eslint-disable-line
  } catch (err) {
    console.log(err);
  }
};

export default syncData;
