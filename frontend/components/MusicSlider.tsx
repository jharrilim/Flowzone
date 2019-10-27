import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';
import PlayButton from './PlayButton';

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

export const MusicSlider = () => {
  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <PlayButton />
      </View>
      <View style={styles.slider}>
        <Slider thumbTintColor={'#77E'} />
      </View>
    </View>
  );
};

export default MusicSlider;
