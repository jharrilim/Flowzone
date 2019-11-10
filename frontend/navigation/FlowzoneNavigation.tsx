import React from 'react';
import Flowzone from '../screens/Flowzone';
import { stackNavigator } from '.';

export const FlowzoneNavigation = stackNavigator({
  Start: {
    screen: Flowzone,
    navigationOptions: ({ navigation }) => ({
      title: 'Flowzone',
    })
  },
});
