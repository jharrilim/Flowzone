import React, { useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

interface PlayButtonProps {
  onPress?: (isPlaying: boolean) => void
}

export const PlayButton = ({ onPress }: PlayButtonProps) => {
  const [isPlaying, setPlaying] = useState(false);
  const [playingToggleAnim] = useState(new Animated.Value(0));

  const playButtonClicked = () => {
    onPress && onPress(isPlaying);
    Animated.timing(
      playingToggleAnim,
      { toValue: isPlaying ? 0 : 1, duration: 200, easing: Easing.quad }
    ).start(({ finished }) => {
      if (finished)
        setPlaying(!isPlaying);
    });
  };
  const spin = playingToggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  return (
    <View>
      <TouchableOpacity onPress={() => playButtonClicked()}>
        <Animated.View style={{
          transform: [
            { rotate: spin }
          ]
        }}>
          <Icon borderRadius={0} reverse name={isPlaying ? "pause" : "play-arrow"} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default PlayButton;
