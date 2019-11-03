import React, { useState } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';

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

interface AppHeaderProps {
  navigation: NavigationStackProp,
}

export const AppHeader = ({ navigation }: AppHeaderProps) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Avatar
          rounded
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text>{navigation.state.routeName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Icon name="menu" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
