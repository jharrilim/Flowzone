import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
});

export const Profile = () => {
  return (
    <View style={styles.root}>
      <Image 
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={{ textAlign: 'center' }}>Your profile</Text>
    </View>
  );
};

export default Profile;