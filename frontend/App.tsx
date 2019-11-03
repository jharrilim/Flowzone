import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppContext, appContextDefaultValue } from './App.context';
import { ServiceContainer, serviceContainerContextDefaultValue } from './services/service-container.context';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Flowzone from './screens/Flowzone';
import Discover from './screens/Discover';
import Landing from './screens/Landing';
import Song from './screens/Song';
import Artist from './screens/Artist';
import Profile from './screens/Profile';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import UploadSong from './screens/UploadSong';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native';

const AppNavigator = createStackNavigator({
  Start: {
    screen: Landing,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
      header: null,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({ }) => ({
      title: 'Home',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: ({ }) => ({
      title: 'Login',
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: ({ }) => ({
      title: 'Register',
      // header: null,
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
    }),
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

export default () => {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <ServiceContainer.Provider value={serviceContainerContextDefaultValue}>
      <AppContext.Provider value={appContextDefaultValue}>
        {/* <StatusBar backgroundColor="#FFF" barStyle="light-content" /> */}
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigatorContainer screenProps={{ setShowFooter }} />
        </SafeAreaView>
        {showFooter && <AppFooter />}
      </AppContext.Provider>
    </ServiceContainer.Provider>
  );
};
