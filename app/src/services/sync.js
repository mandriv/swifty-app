import AppleHealthKit from 'rn-apple-healthkit';
import { Platform } from 'react-native';
import * as HealthData from '../config/HealthData';
import { updateStepsAndCalories } from './fitnessData';

const syncStepsAndCalories = async (userId, token) => {
  // get steps and calories
  try {
    const steps = await HealthData.getTodaysSteps();
    const calories = steps / HealthData.STEPS_PER_CALORIE;
    const response = await updateStepsAndCalories(userId, token, {
      steps,
      calories,
    });
    console.log(response);
  } catch (error) {
    console.log(error.request);
    console.log(error.response);
    console.log(error);
  }

}

export default syncStepsAndCalories;
