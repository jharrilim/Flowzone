import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Text, Input, Button } from 'react-native-elements';
import { View, AsyncStorage } from 'react-native';
import { material } from 'react-native-typography';
import { ServiceContainer } from '../../services/service-container.context';
import { NavigationStackProp } from 'react-navigation-stack';

interface LoginProps {
  navigation: NavigationStackProp<any, any>
}

export const Login = ({ navigation }: LoginProps) => {
  const { userService } = useContext(ServiceContainer);
 
  return (
    <Formik initialValues={{ identifier: '', password: '' }} 
      onSubmit={async (loginData, { resetForm }) => {
        const jwt = await userService.login(loginData);
        await AsyncStorage.setItem('jwt', jwt);
        navigation.popToTop({ immediate: false });
        navigation.navigate('Discover');
      }
    }>
      {({ values, handleSubmit }) => {
        return (
          <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Text style={material.display1}>Login</Text>
              <Text style={material.title}>Email/Username</Text>
              <Input value={values.identifier} />
              <Text style={material.title}>Password</Text>
              <Input value={values.password} />
            </View>
            <View>
              <Button onPress={() => handleSubmit()} title="Login" />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
