const REQUIRED_ENVS = [
  'PORT',
];

const envCheck = (envs) => {
  const variables = Object.keys(envs);
  for (const env of REQUIRED_ENVS) {
    if (!variables.includes(env)) {
      throw new Error(`Missing environment variable '${env}'!`);
    }
  }
};

export default envCheck;
