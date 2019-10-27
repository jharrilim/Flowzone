import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
    // paddingTop: getStatusBarHeight(),
    // height: getStatusBarHeight(),
  }
});

export const AppHeader = () => {

  return (
    <View style={styles.root}>
      <Avatar rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
    </View>
  );
};

export default AppHeader;
