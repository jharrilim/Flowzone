import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Alert, SafeAreaView } from 'react-native';
import { Button, Text, Input, Icon, } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as DocumentPicker from 'expo-document-picker';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  form: {
    flexDirection: 'column',
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
  titleInput: {
    textAlign: 'center',
    textDecorationLine: 'none',
  }
});

interface UploadSongProps {
  navigation: NavigationStackProp,
}

export const UploadSong = ({ navigation }: UploadSongProps) => {
  const [coverImageUri, setCoverImageUri] = useState('');
  const [song, setSong] = useState<DocumentPicker.DocumentResult>({ type: 'cancel' });
  return (
    <ScrollView style={styles.root}>
      <Formik
        initialValues={{
          title: '',
          lyrics: '',
          description: '',
          bpm: 80,
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
            <Input
              inputStyle={styles.titleInput}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              placeholder="Song Title"
            />
          </View>
          <View style={styles.cover}>
            <TouchableOpacity onPress={async () => {
              const permissionResult = await Permissions.askAsync(Permissions.CAMERA_ROLL);
              if (permissionResult.status !== Permissions.PermissionStatus.GRANTED)
                return Alert.alert('Insufficient Permissions', 'Cannot upload cover photo without gallery permissions.');

              const imageResult = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: false });
              if (imageResult.cancelled === true)
                return;

              setCoverImageUri(imageResult.uri);
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
            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
              <View style={{ flex: 6 }}>
                <Text>{song.name || (song.file && song.file.name) || 'Upload Song'}</Text>
                <TouchableOpacity
                  onPress={async () => {
                    const documentResult = await DocumentPicker.getDocumentAsync({
                      multiple: false,
                      type: 'audio/*'
                    });
                    if(documentResult.type === 'cancel')
                      return;

                    setSong(documentResult);
                  }}
                >
                  <Icon name="cloud-upload" reverse />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 4 }}>
                <Input
                  label={'Beats Per Minute'}
                  style={{ flex: 1 }}
                  value={values.bpm.toString()}
                  onChangeText={handleChange('bpm')}
                  onBlur={handleBlur('bpm')}
                  placeholder={'BPM'}
                  keyboardType={'number-pad'}
                  leftIcon={<Icon name="music-note" />}
                />
              </View>
            </View>
            <View>
              <Input
                label={"Description"}
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
