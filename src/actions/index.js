import axios from 'axios';

import { CREATE_TOKEN } from './types';

const ROOT_URL = 'http://booking-backend.eu-west-2.elasticbeanstalk.com';

export function createToken(values) {
  const request = axios.post(`${ROOT_URL}/rest-auth/registration/`, values)
  return {
    type: CREATE_TOKEN,
    payload: request
  }
}
