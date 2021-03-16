import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Connection} from './src/api/connection';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Connection();
AppRegistry.registerComponent(appName, () => ConnectedApp);
