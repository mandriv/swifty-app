import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = {};

export const { Types, Creators } = createActions({
  receiveUser: ['user'],
  resetUser: [],
});

export const receiveUser = (state, { user }) => user;
export const resetUser = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.RECEIVE_USER]: receiveUser,
  [Types.RESET_USER]: resetUser,
});
