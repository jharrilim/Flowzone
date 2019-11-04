import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Landing from '../screens/auth/Landing';

import AppNavigation from './AppNavigation';
import AppDrawerNavigation from './AppDrawerNavigation';

const AuthNavigator = createSwitchNavigator({
  Start: {
    screen: Landing,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
    }),
  },
  App: {
    screen: AppDrawerNavigation,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: ({ }) => ({
      title: 'Login',
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: ({ }) => ({
      title: 'Register',
    }),
  },
},
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export const AuthNavigationContainer = createAppContainer(AuthNavigator);

export const AuthNavigation = () => <AuthNavigationContainer />

export default AuthNavigation;
