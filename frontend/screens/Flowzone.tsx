import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationScreenProp } from 'react-navigation';

interface FlowzoneProps {
  navigation: NavigationScreenProp<any, any>
}

export const Flowzone = ({ navigation }: FlowzoneProps) => {

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={material.title}>Trending</Text>
          <Image source={require('../assets/icon.png')} defaultSource={require('../assets/icon.png')} />
          <Text>Song Title</Text>
        </View>
      </View>
      <View>
        <Button title="Discover" onPress={() => navigation.navigate('Discover')} />
      </View>
    </View>
  );
};

export default Flowzone;
