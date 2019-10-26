import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

import { material } from 'react-native-typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface AppProps {
  navigation: NavigationScreenProp<any, any>
}

export const Landing = ({ navigation }: AppProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ alignContent: 'space-between' }}>
          <Text style={material.title}>Enter the Flowzone Lair</Text>
          <Text style={material.caption}>Where your saliva and spit could split thread into fiber and bits trust me it's as live as it gets</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button color="#55C" title="Login" onPress={e => { navigation.navigate('Login') }} />
          <Button color="#55C" title="Flowzone" onPress={e => { navigation.navigate('Flowzone') }} />
          <Button color="#55C" title="Register" onPress={e => { navigation.navigate('Register') }} />
        </View>
      </View>
    </View>
  );
}

export default Landing;
