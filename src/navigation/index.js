import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './authStack';
import {HomeTabs} from './homeTabs';

export const AppContainer = (props) => {
  const {isAuthenticated} = props;
  // console.log('is auth', isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
