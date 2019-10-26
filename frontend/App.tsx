
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Flowzone from './screens/Flowzone';
import Discover from './screens/Discover';
import Landing from './screens/Landing';
import Song from './screens/Song';

const AppNavigator = createStackNavigator({
  Start: {
    screen: Landing,
    navigationOptions: ({ }) => ({
      title: 'Flowzone'
    })
  },
  Home: {
    screen: Home
  },
  Login: {
    screen: Login,
    navigationOptions: ({ }) => ({
      title: 'Login',
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ }) => ({
      title: 'Register'
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
  }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#77E',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(AppNavigator);
