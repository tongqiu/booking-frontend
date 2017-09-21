import axios from 'axios';

import { CREATE_USER } from './types';

const ROOT_URL = 'http://booking-backend.eu-west-2.elasticbeanstalk.com';

export function createToken(values) {
  const request = axios.post(`${ROOT_URL}/users/new/`, values)
  return {
    type: CREATE_USER,
    payload: request
  }
}
