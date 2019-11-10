import React from 'react';
import { Slider, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import SongTime from './SongTime';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  sliderText: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  times: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

interface MusicSliderProps {
  artist?: string,
  title?: string,
  length?: number,
  currentTime?: number,
  onSlidingComplete?: (position: number) => void,
}

export const MusicSlider = ({ artist, title, length, currentTime, onSlidingComplete }: MusicSliderProps) => {

  return (
    <View style={styles.root}>
      <Slider
        thumbTintColor={'#44C'}
        maximumTrackTintColor={"#77E"}
        minimumTrackTintColor={'#44C'}
        value={currentTime || 0}
        minimumValue={0}
        maximumValue={length}
        onSlidingComplete={onSlidingComplete}
      />
      <View style={styles.times}>
        <SongTime length={currentTime} />
        {title && artist && <Text>{artist} - {title}</Text>}
        <SongTime length={length} />
      </View>
    </View>
  );
};

export default MusicSlider;
