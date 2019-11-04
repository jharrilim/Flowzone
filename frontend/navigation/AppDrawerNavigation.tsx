import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AppNavigation from './AppNavigation';

const AppDrawerNavigation = createDrawerNavigator({
  Start: AppNavigation,
}, {
  
  initialRouteName: 'Start'
});



export default AppDrawerNavigation;
