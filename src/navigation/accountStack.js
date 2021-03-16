import React from 'react';
import Account from '../screens/account';
import SignUp from '../screens/signup';
import UpdateProfile from '../screens/updateProfile';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};
