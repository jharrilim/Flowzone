import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import PlayButton from './PlayButton';
import MusicSlider from './MusicSlider';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: 10
  },
  icon: {

  },
  slider: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

export const AppFooter = () => {
  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <PlayButton />
      </View>
      <View style={styles.slider}>
        <MusicSlider title="Foo Bar" artist="Bazzy Baz" />
      </View>
    </View>
  );
};

export default AppFooter;
