import React from 'react';
import { stackNavigator } from '.';
import Discover from '../screens/Discover';
import Artist from '../screens/Artist';

export const DiscoverNavigation = stackNavigator({
    Start: {
        screen: Discover,
        navigationOptions: ({ }) => ({
            title: 'Discover'
        })
    },
    Artist: {
      screen: Artist,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('artist', 'Artist'),
      }),
    },
});
