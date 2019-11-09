import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import { material } from 'react-native-typography';
import { NavigationScreenProp } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { mockData } from './mock/mock-data';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

interface FlowzoneProps {
  navigation: NavigationScreenProp<any, any>
}

export const Flowzone = ({ navigation }: FlowzoneProps) => {

  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={material.title}>Trending</Text>
            <Carousel
              data={mockData}
              sliderWidth={400}
              itemWidth={400}
              renderItem={({ item: { title, artist }, index }) => {
                return (
                  <View>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('Song', { title, artist });
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
        </View>
        <View>
          <Button title="Discover" onPress={() => navigation.navigate('Discover')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Flowzone;
