import React from 'react';
import SignIn from '../screens/signin';
import SignUp from '../screens/signup';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthStack = () => {
  // console.log('Hi from Auth');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
