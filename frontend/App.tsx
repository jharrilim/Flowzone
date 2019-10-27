import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Flowzone from './screens/Flowzone';
import Discover from './screens/Discover';
import Landing from './screens/Landing';
import Song from './screens/Song';
import Artist from './screens/Artist';
import { AppContext, appContextDefaultValue } from './App.context';
import { ServiceContainer, serviceContainerContextDefaultValue } from './services/service-container.context';
import MusicSlider from './components/MusicSlider';
import AppHeader from './components/AppHeader';
import { StatusBar } from 'react-native';

const AppNavigator = createStackNavigator({
  Start: {
    screen: Landing,
    navigationOptions: ({ }) => ({
      title: 'Flowzone',
      header: null
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ }) => ({
      title: 'Home'
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ }) => ({
      title: 'Login',
      header: null,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ }) => ({
      title: 'Register',
      // header: null,
    })
  },
  Flowzone: {
    screen: Flowzone,
    navigationOptions: ({ }) => ({
      title: 'Flowzone'
    })
  },
  Discover: {
    screen: Discover,
    navigationOptions: ({ }) => ({
      title: 'Discover'
    })
  },
  Song: {
    screen: Song,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title', 'Song')
    })
  },
  Artist: {
    screen: Artist,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('artist', 'Artist')
    })
  }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#77E',
      },
      header: () => <AppHeader />,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default () => (
  <ServiceContainer.Provider value={serviceContainerContextDefaultValue}>
    <AppContext.Provider value={appContextDefaultValue}>
      {/* <StatusBar backgroundColor="#FFF" barStyle="light-content" /> */}
      <AppNavigatorContainer />
      <MusicSlider />
    </AppContext.Provider>
  </ServiceContainer.Provider>
);
