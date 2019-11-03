import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Landing from '../screens/auth/Landing';

import AppNavigation from './AppNavigation';

const AuthNavigator = createStackNavigator({
  Start: {
    screen: Landing,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
    }),
  },
  App: {
    screen: AppNavigation,
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
    headerMode: 'none'
  }
);

export const AuthNavigationContainer = createAppContainer(AuthNavigator);

export const AuthNavigation = () => <AuthNavigationContainer />

export default AuthNavigation;
