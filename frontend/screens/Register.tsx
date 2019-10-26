import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import Axios from 'axios';

export const Register = () => {
  return (
    <>
      <Formik initialValues={{ name: '' }} onSubmit={() => { }}>
        {props => {
          return (
            <>
              <Text>{props.values.name}</Text>
            </>
          );
        }}
      </Formik>
    </>
  )
};

export default Register;
