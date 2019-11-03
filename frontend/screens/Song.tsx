import React from 'react';
import { Image, View, FlatList, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { material } from 'react-native-typography';
import { SocialIcon, Icon, Text, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  social: {
    flexDirection: 'row',

  }
});

interface SongProps {
  navigation: NavigationStackProp<any, any>
}


export const Song = ({ navigation }: SongProps) => {
  const fakeComments = [
    { comment: 'Wow', author: 'Foo' },
    { comment: 'Nice', author: 'Bar' },
  ];

  return (
    <View style={styles.root}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Text>Artist</Text>
            <Image source={require('../assets/icon.png')} defaultSource={require('../assets/icon.png')} />
            <Text>{navigation.getParam('title')}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon raised={true} name="thumb-up" />
          </View>
          <View style={styles.social}>
            <SocialIcon type="twitter" raised={true} />
            <SocialIcon type="facebook" raised={true} />
            <SocialIcon type="soundcloud" raised={true} />
          </View>
          <View>
            <Icon raised={true} name="play-arrow" />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={material.display1}>Comments</Text>
        <FlatList
          data={fakeComments}
          keyExtractor={({ author, comment }, i) => `${author}_${comment}_${i}`}
          renderItem={rowData => (
            <View>
              <Text style={material.body1}>{rowData.item.comment}</Text>
              <Text style={material.caption}>- {rowData.item.author}</Text>
            </View>
          )} />
      </View>
    </View>
  );
};

export default Song;
