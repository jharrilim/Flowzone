import React from 'react';
import { Slider, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column'
  },
  sliderText: {
    flexDirection: "row",
    justifyContent: 'center'
  }
});

interface MusicSliderProps {
  artist?: string,
  title?: string
}

export const MusicSlider = ({ artist, title }: MusicSliderProps) => {
  return (
    <View style={styles.root}>
      <Slider thumbTintColor={'#77E'} maximumTrackTintColor="#5CA" />
      <View style={styles.sliderText}>
        {title && artist && <Text>{artist} - {title}</Text>}
      </View>
    </View>
  );
};

export default MusicSlider;
