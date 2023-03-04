import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LoginScreen = ({ navigation }) => (
  <View style={styles.background}>
    <View style={styles.logo}>
      <Image source={require('../../../assets/logo.png')} />
    </View>
    <View style={styles.components}>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={() => navigation.navigate('HomeScreen')}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          text='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='password'
          placeholder='Password'
          secureTextEntry
          text='Password'
          textContentType='password'
        />
        <View style={styles.row}>
          <Text style={styles.phrase}>Forgot Password?</Text>
        </View>
        <View style={styles.loginButton}>
          <SubmitButton title='Login' onPress={() => navigation.navigate('HomeScreen')} />
        </View>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign Up Instead</Text>
        </TouchableOpacity>
      </AppForm>
    </View>
  </View>
)

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  logo: {
    alignItems: 'center',
  },
  components: {
    flex: 0.6,
    marginTop: RFPercentage(5),
  },
  row: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  phrase: {
    fontSize: RFValue(10),
    color: 'rgba(35, 184, 166, 1)',
    marginVertical: RFPercentage(3),
  },
  loginButton: {
    alignItems: 'center',
  },
  signup: {
    color: 'rgba(0, 133, 255, 1)',
    fontWeight: '500',
    marginLeft: 30,
    marginTop: 50,
  },
})

export default LoginScreen
