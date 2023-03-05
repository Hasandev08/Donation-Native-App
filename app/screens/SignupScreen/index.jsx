import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import DropdownComponent from '../../components/common/DropdownComponent'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { RFPercentage } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const SignUpScreen = ({ navigation }) => {
  const data = [
    { label: 'NGO', value: '1' },
    { label: 'Restaurant', value: '2' },
  ]

  return (
    <ScrollView style={styles.background}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.components}>
        <AppForm
          initialValues={{
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField text='Name' name='fullName' textContentType='name' placeholder='Name' />
          <AppFormField
            keyboardType='phone-pad'
            name='phoneNumber'
            placeholder='Phone Number'
            text='Contact'
            textContentType='telephoneNumber'
          />
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
          <DropdownComponent data={data} placeholder='Select' />
          <View style={styles.signupButton}>
            <SubmitButton title='Signup' />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.login}>Sign In Instead</Text>
          </TouchableOpacity>
        </AppForm>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  logo: {
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 80,
  },
  components: {
    flex: 0.6,
    marginTop: RFPercentage(5),
  },
  signupButton: {
    alignItems: 'center',
    marginBottom: RFPercentage(4),
    marginTop: 15,
  },
  login: {
    color: 'rgba(0, 133, 255, 1)',
    fontWeight: '500',
    marginBottom: 40,
    marginLeft: 30,
    marginTop: 10,
  },
})

export default SignUpScreen
