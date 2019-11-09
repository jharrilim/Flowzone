import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Flowzone from '../screens/Flowzone';
import Discover from '../screens/Discover';
import Song from '../screens/Song';
import Artist from '../screens/Artist';
import Profile from '../screens/Profile';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import UploadSong from '../screens/UploadSong';

const AppNavigator = createStackNavigator({
  Start: {
    screen: Flowzone,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
    }),
  },
  Flowzone: {
    screen: Flowzone,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
    }),
  },
  Discover: {
    screen: Discover,
    navigationOptions: ({ }) => ({
      title: 'Discover',
    }),
  },
  Song: {
    screen: Song,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', 'Song'),
    }),
  },
  Artist: {
    screen: Artist,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('artist', 'Artist'),
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Your Profile',
    })
  },
  UploadSong: {
    screen: UploadSong,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        title: 'Upload a Song',
      };
    }
  },
},
  {
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
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export const AppNavigation = () => (
  <>
    <AppNavigatorContainer />
    <AppFooter />
  </>
);

export default AppNavigation;
