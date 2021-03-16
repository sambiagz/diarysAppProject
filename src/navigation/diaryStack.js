import React from 'react';
import Account from '../screens/account';
import SignUp from '../screens/signup';
import UpdateProfile from '../screens/updateProfile';
import DiaryList from '../screens/diaryList';
import Diary from '../screens/diary';
import AddDiary from '../screens/AddDiary';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const DiaryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiaryListScreen"
        component={DiaryList}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DiaryScreen" component={Diary} />
      <Stack.Screen name="AddDiary" component={AddDiary} />
    </Stack.Navigator>
  );
};
