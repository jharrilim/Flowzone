import React, { useContext } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AppNavigation from './AppNavigation';
import { createAppContainer } from 'react-navigation';
import { ServiceContainer } from '../services/service-container.context';

const AppDrawerNavigation = createDrawerNavigator({
  Start: AppNavigation,
}, {
  initialRouteName: 'Start',
});

const AppDrawerNavigationContainer = createAppContainer(AppDrawerNavigation);

export default () => {
  const { navigationService } = useContext(ServiceContainer);
  return (
    <AppDrawerNavigationContainer ref={ref => navigationService.setDrawerNavigator(ref)} />
  );
};