import { combineReducers } from 'redux';
import token from './Token.redux';
import user from './User.redux';
import goals from './Goals.redux';

const Reducer = combineReducers({
  token,
  user,
  goals,
});

export default Reducer;
