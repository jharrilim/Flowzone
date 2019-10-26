import React from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';

export const Login = () => {

  return (
    <Formik initialValues={{}} onSubmit={() => { }}>
      {(props) => (
        <>
          <Text>Login</Text>
        </>
      )}}
    </Formik>
  );
};

export default Login;
