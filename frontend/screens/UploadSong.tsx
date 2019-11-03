import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Text, Input, } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { material } from 'react-native-typography';
import { NavigationStackProp } from 'react-navigation-stack';
import { AppContext } from '../App.context';

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
  },
  cover: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    // width: win.width * 0.8,
    // height: win.height,
  }
});

interface UploadSongProps {
  navigation: NavigationStackProp,

}

export const UploadSong = ({ navigation }: UploadSongProps) => {
  const appContext = useContext(AppContext);
  appContext.showFooter = navigation.getParam('showFooter', false);
  return (
    <View style={styles.root}>
      <View style={{ alignItems: 'center' }}>
        <Text style={material.headline}>Upload Your Composition</Text>
      </View>
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
          <View style={styles.cover}>
            <Image
              style={styles.coverImage}
              resizeMode={'contain'}
              source={require('../assets/icon.png')}
              defaultSource={require('../assets/icon.png')}
            />
            <Button title="Upload a Cover Photo" />
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
    </View>
  );
};

export default UploadSong;