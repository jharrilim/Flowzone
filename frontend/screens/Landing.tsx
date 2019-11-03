import React, { useState, useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { material } from 'react-native-typography';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

interface AppProps {
  navigation: NavigationScreenProp<any, any>
}

export const Landing = ({ navigation }: AppProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 1000 }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ alignContent: 'space-between' }}>
            <Text style={material.display3}>Flowzone</Text>
            <Text style={material.display2}>Music sounds better, with you.</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Button title="Upload" onPress={e => { navigation.navigate('UploadSong') }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Button title="Login" onPress={e => { navigation.navigate('Login') }} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Enter" onPress={e => { navigation.navigate('Flowzone', { title: 'Flowzone'}) }} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Get Started" onPress={e => { navigation.navigate('Register') }} />
              </View>
            </View>
          </View>
          </View>
      </Animated.View>
    </View>
  );
}

export default Landing;
