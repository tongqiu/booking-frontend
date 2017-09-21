import { CREATE_USER } from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        token: action.payload.data.token,
        id: action.payload.data.id,
        username: action.payload.data.username
      }
    default:
      return state;
  }
}
