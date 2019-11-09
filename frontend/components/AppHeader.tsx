import React, { useState, useContext } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp, HeaderProps } from 'react-navigation-stack';
import { material } from 'react-native-typography';
import { ServiceContainer } from '../services/service-container.context';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

const AnimatedAvatar = Animated.createAnimatedComponent(Avatar);

interface AppHeaderProps extends HeaderProps {
}

export const AppHeader = ({ navigation, scene }: AppHeaderProps) => {
  const { navigationService } = useContext(ServiceContainer);
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Avatar
          rounded
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={material.title}>{scene.descriptor.options.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigationService.toggleDrawer();
        }}
      >
        <Icon name="menu" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
