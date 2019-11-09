import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ServiceContainer } from '../services/service-container.context';

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

export interface ProfileProps extends NavigationStackScreenProps { }

export const Profile = ({ navigation }: ProfileProps) => {
  const { userService } = useContext(ServiceContainer);
  useEffect(() => {
    userService
      .getCurrentUser()
      .then(user => navigation.setParams({ screenTitle: user.username }))
      .catch(e => console.debug('User should not be able to access Profile without being logged in', e));
  }, []);
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