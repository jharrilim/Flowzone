import React from 'react';
import { Image, View, Text, Button, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { material } from 'react-native-typography';

interface SongProps {
  navigation: NavigationStackProp<any, any>
}


export const Song = ({ navigation }: SongProps) => {
  const fakeComments = [
    { comment: 'Wow', author: 'Foo' },
    { comment: 'Nice', author: 'Bar' },
  ];

  return (
    <View>
      <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
        <View>
          <Button title="Like" onPress={ev => console.log(ev)} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>Artist</Text>
          <Image source={require('../assets/icon.png')} defaultSource={require('../assets/icon.png')} />
          <Text>{navigation.getParam('title')}</Text>
        </View>
        <View>
          <Button title="Listen" onPress={ev => console.log(ev)} />
        </View>
      </View>
      <View>
        <Text style={material.display1}>Comments</Text>
        <FlatList
          data={fakeComments}
          renderItem={rowData => (
            <View key={`${rowData.index}-${rowData.item.author}`}>
              <Text style={material.body1}>{rowData.item.comment}</Text>
              <Text style={material.caption}>- {rowData.item.author}</Text>
            </View>
          )} />
      </View>
    </View>
  );
};

export default Song;
