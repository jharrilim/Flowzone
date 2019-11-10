import React from 'react';
import { View } from 'react-native';
import { Text, Tile } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { material } from 'react-native-typography';
import { mockData } from '../mock/mock-data';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface TrendingProps {
  onItemClick: (e: {
    title: string,
    artist: string,
    index: number,
  }) => void;
}

export const Trending = ({ onItemClick }: TrendingProps) => (

  <View style={{ alignItems: 'center' }}>
    <Text style={material.title}>Trending</Text>
    <Carousel
      data={mockData}
      sliderWidth={400}
      itemWidth={400}
      renderItem={({ item: { title, artist }, index }) => {
        return (
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              onItemClick({ title, artist, index });
            }}>
              <Tile
                imageSrc={require('../assets/icon.png')}
                title={title}
                featured
                caption={artist}
                icon={{ name: 'play-circle', type: 'font-awesome' }}
              />
            </TouchableOpacity>
          </View>
        )
      }}
      hasParallaxImages={true}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.7}
      loop={true}
      loopClonesPerSide={2}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={10000}
    />
  </View>
)