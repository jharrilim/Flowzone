import React from 'react';
import { View, Text, Button } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';

interface DiscoverProps {
  navigation: NavigationStackProp<any, any>
}

export const Discover = ({ navigation }: DiscoverProps) => {

  return (
    <View>
      <Text style={material.title}>Discover new songs</Text>
      <View>
        <Button title="Song 1" onPress={() => navigation.navigate('Song', { title: 'Song 1' })} />
      </View>
    </View>
  );
};

export default Discover;
