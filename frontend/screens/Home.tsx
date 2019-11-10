import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Trending } from '../components/Trending';
import { Button } from 'react-native-elements';

interface HomeProps {
  navigation: NavigationScreenProp<any, any>
}

export const Home = ({ navigation }: HomeProps) => {

  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <Trending onItemClick={({ title }) => {
            
          }} />
        </View>
        <View>
          <Button title="Discover" onPress={() => navigation.navigate('Discover')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
