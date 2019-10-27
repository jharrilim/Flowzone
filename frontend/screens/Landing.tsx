import React, { useState, useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

import { material } from 'react-native-typography';

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
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button color="#55C" title="Login" onPress={e => { navigation.navigate('Login') }} />
            <Button color="#55C" title="Flowzone" onPress={e => { navigation.navigate('Flowzone') }} />
            <Button color="#55C" title="Register" onPress={e => { navigation.navigate('Register') }} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

export default Landing;
