import AppleHealthKit from 'rn-apple-healthkit';
import { Platform } from 'react-native';

export const APPLE_PERMS = AppleHealthKit.Constants.Permissions;
export const STEPS_PER_CALORIE = 20;

export const AppleHealthKitOptions = {
  permissions: {
    read: [
      APPLE_PERMS.StepCount, // steps
    ],
    write: [],
  },
};

export const init = () => {
  if (Platform.OS === 'ios') {
    AppleHealthKit.initHealthKit(AppleHealthKitOptions, (err) => {
      if (err) console.warn(err);
    });
  }
};

export const getTodaysSteps = () => {
  if (Platform.OS === 'ios') {
    return new Promise((resolve, reject) =>
      AppleHealthKit.getStepCount(undefined, (err, steps) => {
        if (err) return reject(err);
        return resolve(steps.value);
      }));
  }
  return new Promise(resolve => resolve(0));
};
