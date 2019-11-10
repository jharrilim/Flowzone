import React, { useContext } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { ServiceContainer } from '../services/service-container.context';
import { Icon } from 'react-native-elements';
import AppDrawer from '../components/AppDrawer';
import UploadSong from '../screens/UploadSong';
import { DiscoverNavigation } from './DiscoverNavigation';
import { HomeNavigation } from './HomeNavigation';
import { FlowzoneNavigation } from './FlowzoneNavigation';
import AppFooter from '../components/AppFooter';
import { ProfileNavigation } from './ProfileNavigation';

const AppDrawerNavigation = createDrawerNavigator({
  Start: {
    screen: HomeNavigation,
    navigationOptions: ({ }) => ({
      title: 'Home',
      drawerIcon: () => <Icon name={'home'} />,
    }),
  },
  Discover: {
    screen: DiscoverNavigation,
    navigationOptions: ({ }) => ({
      title: 'Discover',
      drawerIcon: () => <Icon name={'explore'} />,
    }),
  },
  Flowzone: {
    screen: FlowzoneNavigation,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
      drawerIcon: () => <Icon name={'library-music'} />,
    }),
  },
  Profile: {
    screen: ProfileNavigation,
    navigationOptions: ({ }) => ({
      title: 'Your Profile',
      drawerIcon: () => <Icon name={'person'} />,
    }),
  },
  UploadSong: {
    screen: UploadSong,
    navigationOptions: ({ }) => ({
      title: 'Upload a Song',
      drawerIcon: () => <Icon name={'music-note'} />,
    }),
  },
}, {
  initialRouteName: 'Start',
  contentComponent: props => <AppDrawer {...props} />,
});

const AppDrawerNavigationContainer = createAppContainer(AppDrawerNavigation);

export default () => {
  const { navigationService } = useContext(ServiceContainer);
  return (
    <>
      <AppDrawerNavigationContainer ref={ref => navigationService.setDrawerNavigator(ref)} />
      <AppFooter />
    </>
  );
};