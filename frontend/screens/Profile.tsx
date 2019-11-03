import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Text, Image } from 'react-native-elements';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
  title: {
    textAlign: 'center',
    flex: 1,
  }
});

export const Profile = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        style={styles.avatar}
        resizeMode={"contain"}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.title}>Your profile Yo</Text>
    </View>
  );
};

export default Profile;