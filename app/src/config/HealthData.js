import AppleHealthKit from 'rn-apple-healthkit';

const PERMS = AppleHealthKit.Constants.Permissions;

export const healthKitOptions = {
  permissions: {
    read: [
      PERMS.StepCount, // steps
      PERMS.ActiveEnergyBurned, // calories
      PERMS.DistanceWalkingRunning, // distance
    ],
    write: [],
  },
};

export const init = () => {
  console.log('initializng');
  AppleHealthKit.initHealthKit(healthKitOptions, (error, data) => {
    AppleHealthKit.getStepCount({}, (err, steps) => {
      console.log(err);
      console.log(steps);
    });
  });
};
