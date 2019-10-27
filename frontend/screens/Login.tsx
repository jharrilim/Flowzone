import React from 'react';
import { Formik } from 'formik';
import { Text, Input, Button } from 'react-native-elements';
import { View } from 'react-native';
import { material } from 'react-native-typography';

export const Login = () => {

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={(props) => { console.log(props); }}>
      {({ values, handleSubmit }) => {
        return (
          <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Text style={material.display1}>Login</Text>
              <Text style={material.title}>Email</Text>
              <Input value={values.email} />
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
