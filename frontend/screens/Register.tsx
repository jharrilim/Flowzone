import React, { useContext } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { ServiceContainer } from '../services/service-container.context';
import * as Yup from 'yup';
import { material } from 'react-native-typography';
import { Input, Text } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';

interface RegisterProps {
  navigation: NavigationStackProp<any, any>
}

export const Register = ({ navigation }: RegisterProps) => {
  const { appService } = useContext(ServiceContainer);
  return (
    <ScrollView>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={async ({ username, email, password }) => {
          const { jwt, user } = await appService.register({ username, email, password });
          await AsyncStorage.multiSet([['jwt', jwt], ['user', JSON.stringify(user)]])
          navigation.navigate('Discover');
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid Email').required(),
          username: Yup.string().min(1).required(),
          password: Yup.string().min(8).required(),
          confirmPassword: Yup.string().required()
            .test('passwords-match', 'The passwords do not match.', function (value) {
              return this.parent.password === value;
            })
        })}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: 'space-between' }}>
            <Text style={material.headline}>Your music journey starts here.</Text>
            <View>
              <View>
                <Text style={material.title}>Email</Text>
                <Input
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <Text style={{ color: 'red' }}><ErrorMessage name="email" /></Text>
              </View>
              <View>
                <Text style={material.title}>Username</Text>
                <Input
                  autoCompleteType="username"
                  textContentType="username"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                <Text style={{ color: 'red' }}><ErrorMessage name="username" /></Text>
              </View>
              <View>
                <Text style={material.title}>Password</Text>
                <Input
                  autoCompleteType="password"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Text style={{ color: 'red' }}><ErrorMessage name="password" /></Text>

                <Text style={material.title}>Confirm Password</Text>
                <Input
                  autoCompleteType="password"
                  secureTextEntry
                  textContentType="password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                <Text style={{ color: 'red' }}><ErrorMessage name="confirmPassword" /></Text>
              </View>
            </View>
            <View>
              {isSubmitting
                ? <ActivityIndicator />
                : <Button onPress={() => handleSubmit()} title="Register" />
              }
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
};

export default Register;
