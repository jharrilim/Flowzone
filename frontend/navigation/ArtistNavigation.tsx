import React from 'react';
import Artist from '../screens/Artist';
import { stackNavigator } from '.';

export const ArtistNavigation = stackNavigator({
  Start: {
    screen: Artist,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('artist', 'Artist'),
    })
  },
});
