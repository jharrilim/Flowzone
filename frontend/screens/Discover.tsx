import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import Carousel from 'react-native-snap-carousel';
import { Tile } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DiscoverProps {
  navigation: NavigationStackProp<any, any>
}
const mockData = [
  { title: 'Some Song', artist: 'Some name' },
  { title: 'Another Song', artist: 'Best Artist' }
];

export const Discover = ({ navigation }: DiscoverProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <View>
      <Text style={material.title}>Discover new songs</Text>
      <View>
        <Carousel
          ref={c => this._slider1Ref = c}
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
