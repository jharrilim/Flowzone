import React, { useState, useEffect, useContext } from 'react';
import { NavigationScreenProp, NavigationActions, StackActions } from 'react-navigation';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { material } from 'react-native-typography';
import { Button } from 'react-native-elements';
import { ServiceContainer } from '../../services/service-container.context';

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
  const { navigationService } = useContext(ServiceContainer);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 1000 }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={{ alignContent: 'space-between' }}>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={material.display3}>Flowzone</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[material.display2, { textAlign: 'center' }]}>
                Music sounds better, with you
              </Text>
            </View>
            <View />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Button title="Login" onPress={e => { navigation.navigate('Login') }} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Enter"
                  onPress={e => {
                    navigationService.dispatchAuthNavigator(NavigationActions.navigate({ routeName: 'App' }));
                  }}
                />
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
