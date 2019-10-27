import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PlayButton from './PlayButton';
import MusicSlider from './MusicSlider';
import { Audio } from 'expo-av';

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
  const [currentSong] = useState(new Audio.Sound());
  const [songIsLoaded, setSongIsLoaded] = useState(false);

  // in milliseconds
  const [currentSongLength, setCurrentSongLength] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    currentSong.setOnPlaybackStatusUpdate(playbackStatus => {
      // https://docs.expo.io/versions/latest/sdk/av/#example-usage
      if (!playbackStatus.isLoaded)
        return;

      if (playbackStatus.isPlaying) { // Playing
        setCurrentPosition(playbackStatus.positionMillis);
      } else { // Paused
      }

      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }

      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    });
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <PlayButton onPress={async isPlaying => {
          if (!isPlaying) {
            if (!songIsLoaded) {
              const playbackStatus = await currentSong.loadAsync(require('../assets/TheCoolProject.mp3'));
              if (!playbackStatus.isLoaded) {
                throw Error('why tho');
              }
              setSongIsLoaded(true);
              setCurrentSongLength(playbackStatus.durationMillis);
            }
            return await currentSong.playAsync();
          } else {
            return await currentSong.pauseAsync();
          }
        }} />
      </View>
      <View style={styles.slider}>
        <MusicSlider
          title="Foo Bar"
          artist="Bazzy Baz"
          length={currentSongLength}
          currentTime={currentPosition}
          onSlidingComplete={position => {
            currentSong.setPositionAsync(position);
          }}
        />
      </View>
    </View>
  );
};

export default AppFooter;
