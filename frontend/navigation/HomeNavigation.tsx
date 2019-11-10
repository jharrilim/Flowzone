import React from 'react';
import Home from '../screens/Home';
import { stackNavigator } from '.';

export const HomeNavigation = stackNavigator({
  Start: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Flowzone',
    })
  },
});
