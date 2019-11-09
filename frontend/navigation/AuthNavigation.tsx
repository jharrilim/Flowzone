import React, { useContext } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Landing from '../screens/auth/Landing';
import AppDrawerNavigation from './AppDrawerNavigation';
import { ServiceContainer } from '../services/service-container.context';

const AuthStackNavigation = createAppContainer(createStackNavigator({
  Start: {
    screen: Landing,
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
));


const AuthNavigator = createSwitchNavigator({
  Start: {
    screen: () => <AuthStackNavigation />,
    navigationOptions: ({ }) => ({
      title: 'Flowzone'
    })
  },
  App: {
    screen: () => <AppDrawerNavigation />,
    navigationOptions: ({ navigation }) => ({
      title: 'Flowzone',
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

export const AuthNavigation = () => {
  const { navigationService } = useContext(ServiceContainer);
  return (
    <AuthNavigationContainer ref={ref => navigationService.setAuthNavigator(ref)} />
  );
};
export default AuthNavigation;
