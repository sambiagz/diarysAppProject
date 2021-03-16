import React from 'react';
import Home from '../screens/home';
import Account from '../screens/account';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {HomeStack} from './homeStack';
import {AccountStack} from './accountStack';
import {DiaryStack} from './diaryStack';
// import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AccountStack') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name == 'Diaries') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name == 'Settings') {
            iconName = focused ? 'list' : 'list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 18},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Diaries"
        component={DiaryStack}
        options={{tabBarLabel: 'Diaries'}}
      />
      {/* <Tab.Screen
        name="Settings"
        component={() => <Text>Settings</Text>}
        options={{tabBarLabel: 'Settings'}}
      /> */}
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{tabBarLabel: 'Account'}}
      />
    </Tab.Navigator>
  );
};
