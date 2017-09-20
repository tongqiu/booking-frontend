import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tokenReducer from './reducer_token'

const rootReducer = combineReducers({
  form: formReducer,
  token: tokenReducer
});

export default rootReducer;
