import { CREATE_TOKEN } from '../actions/types';

export default function(state='', action) {
  switch (action.type) {
    case CREATE_TOKEN:
      return action.payload.data.key;
    default:
      return state;
  }
}
