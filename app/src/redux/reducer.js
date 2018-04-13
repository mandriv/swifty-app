import { combineReducers } from 'redux';
import token from './Token.redux';
import user from './User.redux';

const Reducer = combineReducers({
  token,
  user,
});

export default Reducer;
