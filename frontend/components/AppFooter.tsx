import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import PlayButton from './PlayButton';
import MusicSlider from './MusicSlider';
import { Audio } from 'expo-av';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SlidingPanel from 'rn-sliding-up-panel';
import { Text } from 'react-native-elements';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'hsla(200, 10%, 80%, 0)',
    flexShrink: 1,
    flex: 1,
  },
  container: {
    top: win.height,
    flex: 1,
    backgroundColor: 'hsl(50, 10%, 10%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    backgroundColor: 'hsl(120, 20%, 80%)',
    flexDirection: 'column',
    flex: 1,
    flexShrink: 1,
    position: 'relative',
  },
  panelHeader: {

  },
  songbar: {
    backgroundColor: 'hsl(200, 20%, 80%)',
    flexDirection: 'row',
  },
  icon: {

  },
  slider: {
    flex: 1,
    alignSelf: 'stretch',
    paddingRight: 10,
  },
  pullout: {
    backgroundColor: 'hsl(200, 20%, 80%)',
    marginTop: 20,
    borderRadius: 500,
    height: 5,
    width: '100%',
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

  // const panel = useRef<SlidingPanel>(null);
  // const draggableRange = { top: win.height + 180 - 64, bottom: 180 };
  // const draggedValue = new Animated.Value(180);

  // const backgoundOpacity = draggedValue.interpolate({
  //   inputRange: [win.height - 48, win.height],
  //   outputRange: [1, 0],
  //   extrapolate: "clamp"
  // });

  return (
    <View style={styles.root}>
      <View style={styles.songbar}>
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
    </View>
    //   <SlidingPanel
    //     ref={panel}
    //     draggableRange={draggableRange}
    //     animatedValue={draggedValue}
    //     snappingPoints={[360]}
    //     height={win.height + 180}
    //     friction={0.5}
    //   >
    //     <View style={styles.panel}>
    //       <View style={styles.panelHeader}>
    //         <TouchableWithoutFeedback onPress={() => panel.current.show()}>
    //           <View style={styles.pullout} />
    //         </TouchableWithoutFeedback>
    //         <View style={{ backgroundColor: 'blue' }}>
    //           <Text>Woah</Text>
    //         </View>
    //       </View>
    //       <View style={styles.container}>
    //         <Text>Content</Text>
    //       </View>
    //     </View>
    //   </SlidingPanel>
  );
};

export default AppFooter;
