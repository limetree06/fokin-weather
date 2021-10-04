/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './navigation/homeScreen';
import ClassScreen from './navigation/classScreen';
import MatchScreen from './navigation/matchScreen';
import ChatScreen from './navigation/chatScreen';
import MyPageScreen from './navigation/myPageScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Class" component={ClassScreen} />
        <Tab.Screen name="Match" component={MatchScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
