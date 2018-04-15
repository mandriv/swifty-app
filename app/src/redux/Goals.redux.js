import { createReducer, createActions } from 'reduxsauce';

export const INITIAL_STATE = {
  steps: 5000,
  calories: 250,
  distance: 4000,
  avarage_speed: 2,
};

export const { Types, Creators } = createActions({
  updateGoals: ['goals'],
});

export const updateGoals = (state, { goals }) => goals;

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_GOALS]: updateGoals,
});
