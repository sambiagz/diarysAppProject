import 'react-native-gesture-handler';
import {AppContainer} from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {TOKEN_KEY} from './src/utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from './src/redux/action/authActionCreator';
import axios from 'axios';

function App(props) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      dispatch(setToken(val));
      console.log('Val', val);
      if (val) {
        axios.defaults.headers.Authorization = val;
        setToken(val);
      } else {
        setToken(null);
      }
    });
  }, [token]);
  console.log('Bool Token', !!token);
  return token !== '' && <AppContainer isAuthenticated={!!token} />;
}

export default App;
