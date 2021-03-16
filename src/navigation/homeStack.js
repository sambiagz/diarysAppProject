import React from 'react';
import Home from '../screens/home';
import SignUp from '../screens/signup';
import AddProject from '../screens/addProject';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const HomeStack = () => {
  // console.log('Hi from Auth');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen name="AddProject" component={AddProject} />
    </Stack.Navigator>
  );
};
