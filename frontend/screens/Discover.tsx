import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import Carousel from 'react-native-snap-carousel';

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
          ref={c => this._slider1Ref = c}
          data={[{ title: 'Some Song', artist: 'Some name' }]}
          sliderWidth={400}
          itemWidth={400}
          renderItem={(props) => {
            return (
              <View>
                <Text>{props.item.title}</Text>
                <Text>{props.item.artist}</Text>
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
          autoplayInterval={3000}
          onSnapToItem={(index) => setCarouselIndex(index)}
        />
        <Button title="Song 1" onPress={() => navigation.navigate('Song', { title: 'Song 1' })} />
      </View>
    </View>
  );
};

export default Discover;
