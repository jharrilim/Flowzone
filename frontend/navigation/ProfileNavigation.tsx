import React from 'react';
import Profile from '../screens/Profile';
import { stackNavigator } from '.';

export const ProfileNavigation = stackNavigator({
  Start: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'You',
    })
  },
});
