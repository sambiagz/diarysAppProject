import * as ActionTypes from './actions.types';
import axios from 'axios';
import * as constants from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoginState = (loginData) => {
  return {
    type: ActionTypes.SET_LOGIN_STATE,
    payload: loginData,
  };
};

export const setToken = (token) => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: {token},
  };
};

export const clearReduxData = () => ({type: ActionTypes.CLEAR_REDUX});

export const logout = () => {
  AsyncStorage.clear();
  axios.defaults.header.Authorization = undefined;
  dispatch(clearReduxData);
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: {user},
  };
};

export const signInStart = (isSignIn) => {
  return {
    type: ActionTypes.SIGIN_START,
    payload: {isSignIn},
  };
};

export const signInSuccess = (success) => {
  return {
    type: ActionTypes.SIGIN_SUCCESS,
    payload: {success},
  };
};

export const signInFail = (signinFailure) => {
  return {
    type: ActionTypes.SIGNIN_FAILURE,
    payload: {signinFailure},
  };
};

export const login = (loginInput) => {
  const {email, password} = loginInput;
  return (dispatch, getState) => {
    dispatch(signInStart());
    axios
      .post('/auth/login', {email: email, password: password})
      .then((res) => {
        const {Authorization, user, status} = res.data;
        // console.log(res.data);
        // console.log(Authorization, user, status);

        if (status === 'success') {
          dispatch(setToken(Authorization));
          dispatch(setUser(user));
          dispatch(signInSuccess());
          console.log(Authorization, constants.TOKEN_KEY);
          AsyncStorage.setItem(constants.TOKEN_KEY, Authorization);
          AsyncStorage.setItem(constants.USER_KEY, user);
          axios.defaults.headers.Authorization = Authorization;
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};
