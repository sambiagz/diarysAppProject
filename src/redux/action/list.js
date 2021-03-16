import {ADD_TOKEN, ADD_USER, DELET_DIARY} from './actions.types';

export const addToken = (token) => ({
  type: 'ADD_TOKEN',
  payload: 'token',
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const deleteDiary = (id) => ({
  type: 'DELET_DIARY',
  payload: id,
});
