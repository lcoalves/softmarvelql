import axios from 'axios';
import md5 from 'md5';

import keys from '../config/keys';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

api.interceptors.request.use(async (config) => {
  const apiPublicKey = keys.MARVEL_PUBLIC_KEY;
  const apiPrivateKey = keys.MARVEL_PRIVATE_KEY;
  const currentTimeStamp = new Date().getTime();

  if (apiPublicKey) {
    config.params.apikey = apiPublicKey;
  }

  if (currentTimeStamp) {
    config.params.ts = currentTimeStamp;
  }

  if (apiPrivateKey) {
    const currentHash = md5(
      `${currentTimeStamp}${apiPrivateKey}${apiPublicKey}`,
    );
    config.params.hash = currentHash;
  }

  return config;
});

export default api;
