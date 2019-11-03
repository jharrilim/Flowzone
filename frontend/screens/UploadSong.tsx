import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { Button, Text, Input, } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  form: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  cover: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: win.width * 0.8,
    height: win.height * 0.3,
  },
});

interface UploadSongProps {
  navigation: NavigationStackProp,
}

export const UploadSong = ({ navigation }: UploadSongProps) => {
  const [coverImageUri, setCoverImageUri] = useState('');
  return (
    <ScrollView style={styles.root}>
      <Formik
        initialValues={{
          title: '',
          lyrics: '',
          description: '',
          bpm: 0,
        }}
        onSubmit={() => {

        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required(),
          lyrics: Yup.string().notRequired(),
          description: Yup.string().notRequired(),
          bpm: Yup.number().max(1000).integer().required(),
        })}
      >{({ values, handleChange, handleBlur }) => (
        <View style={styles.form}>
          <View style={{ alignItems: 'center' }}>
            <Text style={material.headline}>Upload Your Composition</Text>
          </View>
          <View style={styles.cover}>
            <TouchableOpacity onPress={async () => {
              const permissionResult = await Permissions.askAsync(Permissions.CAMERA_ROLL);
              if (permissionResult.status !== Permissions.PermissionStatus.GRANTED) {
                Alert.alert('Insufficient Permissions', 'Cannot upload cover photo without gallery permissions.');
              }
              const imageResult = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: false });
              if (imageResult.cancelled === false) {
                setCoverImageUri(imageResult.uri);
              }
            }}>
              <Image
                style={styles.coverImage}
                resizeMode={'contain'}
                source={coverImageUri.length > 0 ? { uri: coverImageUri } : require('../assets/icon.png')}
                defaultSource={require('../assets/icon.png')}
              />
            </TouchableOpacity>
            <Text style={material.caption}>Upload a Cover Photo</Text>
          </View>
          <View>
            <View style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
              <Input
                style={{ alignSelf: 'flex-start', width: '80%' }}
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                placeholder="Song Title"
              />
            </View>
            <View>
              <Text style={material.title}>Description</Text>
              <Input
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                placeholder={'Describe your composition...'}
                multiline
                numberOfLines={6}
              />
            </View>
          </View>
        </View>
      )}</Formik>
    </ScrollView>
  );
};

export default UploadSong;