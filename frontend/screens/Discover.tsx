import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import Carousel from 'react-native-snap-carousel';
import { Tile } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { mockData } from '../mock/mock-data';

interface DiscoverProps {
  navigation: NavigationStackProp<any, any>
}

export const Discover = ({ navigation }: DiscoverProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <View>
      <Text style={material.title}>Discover new songs</Text>
      <View>
        <Carousel
          data={mockData}
          sliderWidth={400}
          itemWidth={400}
          renderItem={(props) => {
            return (
              <View>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Song', { title: props.item.title, artist: props.item.artist });
                }}>
                  <Tile 
                    imageSrc={require('../assets/icon.png')} 
                    title={props.item.title} 
                    featured 
                    caption={props.item.artist}
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
          onSnapToItem={(index) => setCarouselIndex(index)}
        />
      </View>
    </View>
  );
};

export default Discover;
