import AppleHealthKit from 'rn-apple-healthkit';
import { Platform } from 'react-native';

const APPLE_PERMS = AppleHealthKit.Constants.Permissions;

export const AppleHealthKitOptions = {
  permissions: {
    read: [
      APPLE_PERMS.StepCount, // steps
      APPLE_PERMS.ActiveEnergyBurned, // calories
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
