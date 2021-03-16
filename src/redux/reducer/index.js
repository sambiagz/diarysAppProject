import {combineReducers} from 'redux';
import list from './list';
import {loginReducer} from './authReducer';
import {homeReducer} from './homeReducer';
import {CLEAR_REDUX} from '../action/actions.types';

export const rootReducer = combineReducers({
  list,
  auth: loginReducer,
  home: homeReducer,
});

export const appReducer = (state, action) => {
  if (action.type === CLEAR_REDUX) {
    return rootReducer(undefined, action);
  } else {
    return rootReducer(state, action);
  }
};
