import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderProps } from 'react-navigation-stack';
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

interface AppHeaderProps extends HeaderProps {
}

export const AppHeader = ({ scene }: AppHeaderProps) => {
  const { navigationService } = useContext(ServiceContainer);
  return (
    <View style={styles.root}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigationService.toggleDrawer()}>
          <Avatar
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={material.title}>{scene.descriptor.options.title}</Text>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default AppHeader;
