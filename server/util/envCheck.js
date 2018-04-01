const REQUIRED_ENVS = [
  'PORT',
];

const envCheck = () => {
  for (const env of REQUIRED_ENVS) {
    if (!process.env[env]) {
      throw new Error(`Missing environment variable '${env}'!`);
    }
  }
  console.log('Environment variables set...'); // eslint-disable-line
};

export default envCheck;
