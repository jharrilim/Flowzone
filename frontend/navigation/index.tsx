import React from 'react';
import { NavigationRouteConfigMap, NavigationRoute, CreateNavigatorConfig, NavigationStackRouterConfig, createAppContainer } from 'react-navigation';
import { NavigationStackOptions, NavigationStackProp, NavigationStackConfig, createStackNavigator } from 'react-navigation-stack';
import AppHeader from '../components/AppHeader';

export type RouteConfig = NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp<NavigationRoute, any>>;
export type StackConfig = CreateNavigatorConfig<NavigationStackConfig, NavigationStackRouterConfig, NavigationStackOptions, NavigationStackProp<NavigationRoute, any>>;

export function stackNavigator(routeConfig: RouteConfig) {
  const StackNavigator = createAppContainer(createStackNavigator(routeConfig, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#77E',
      },
      header: props => <AppHeader {...props} />,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }));

  return () => (
    <>
      <StackNavigator />
    </>
  )
}