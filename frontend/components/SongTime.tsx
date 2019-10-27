import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import { Text } from 'react-native-elements';

interface SongTimeProps {
  length: number,
  style?: StyleProp<TextStyle>
}

export const SongTime = ({ length = 0, style }: SongTimeProps) => {
  if (Math.floor(length / 1000) === 0)
    return <Text style={style}>0:00</Text>;

  const mins = Math.floor(length / 1000 / 60);
  const secs = Math.floor(length / 1000 % 60);
  const timeStr = `${mins}:${secs < 10 ? "0" + secs : secs}`;
  return <Text style={style}>{timeStr}</Text>;
};

export default SongTime;