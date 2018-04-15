import { store } from '../redux/store';

import * as HealthData from '../config/HealthData';
import * as Geo from '../config/GeolocationHelpers';
import { updateStats } from './fitnessData';

export const syncData = async () => {
  try {
    const distance = await Geo.getTodaysDistance();
    const speed = await Geo.getTodaysAverageSpeed();
    let steps = null;
    let calories = null;
    try {
      steps = await HealthData.getTodaysSteps();
      calories = steps / HealthData.STEPS_PER_CALORIE;
    } catch (err) {
      console.log(err);
    }
    // get token and user
    const state = store.getState();
    const { token, user } = state;
    let requestForm = {
      distance,
      average_speed: speed,
    };
    if (steps && calories) {
      requestForm = {
        ...requestForm,
        steps,
        calories,
      };
    }
    console.log(requestForm);
    const response = await updateStats(user.id, token, requestForm);
    console.log(response); // eslint-disable-line
  } catch (error) {
    console.log(error);
  }
};

export default syncData;
