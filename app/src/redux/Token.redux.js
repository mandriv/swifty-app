import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = '';

export const { Types, Creators } = createActions({
  receiveToken: ['token'],
  resetToken: [],
});

export const receiveToken = (state, { token }) => token;
export const resetToken = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.RECEIVE_TOKEN]: receiveToken,
  [Types.RESET_TOKEN]: resetToken,
});
