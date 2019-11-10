import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Avatar, Text } from 'react-native-elements';
import { DrawerItems, DrawerContentComponentProps } from 'react-navigation-drawer';
import { ServiceContainer } from '../services/service-container.context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { material } from 'react-native-typography';

const styles = StyleSheet.create({
  root: {

  },
});

interface AppDrawerProps extends React.PropsWithChildren<DrawerContentComponentProps> { }

export const AppDrawer = (props: AppDrawerProps) => {
  const [username, setUsername] = useState('');
  const { userService } = useContext(ServiceContainer);

  useEffect(() => {
    userService.getCurrentUser().then(user => setUsername(user && user.username || ''));
  }, []);

  return (
    <View style={styles.root}>
      <Header>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Avatar
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          />
        </TouchableOpacity>
        <Text style={material.body1}>{username || 'Flowzone'}</Text>
      </Header>
      <View>
        <DrawerItems {...props} />
      </View>
    </View>
  );
};

export default AppDrawer;
