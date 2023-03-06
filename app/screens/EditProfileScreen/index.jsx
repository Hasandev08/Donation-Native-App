import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppTextInput from '../../components/AppTextInput'
import AppButton from '../../components/common/AppButton'
import { editProfile } from '../../config/profileList'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Image source={require('../../../assets/request.png')} style={styles.image} />
      <Text style={styles.title}>End Poverty Welfare Society</Text>
      <Text style={styles.subTitle}>Non Governmental Organization</Text>
      {editProfile.map((item) => (
        <View key={item.id.toString()} style={{ width: '100%' }}>
          <AppTextInput placeholder={item.placeholder} />
        </View>
      ))}
      <View style={styles.button}>
        <AppButton title='Save' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginVertical: RFPercentage(2),
  },
  image: {
    borderRadius: RFValue(50),
    height: RFPercentage(15),
    marginBottom: RFPercentage(3),
    width: RFPercentage(15),
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: '500',
    marginBottom: RFPercentage(1),
    textDecorationLine: 'underline',
  },
  subTitle: {
    color: 'rgb(161, 161, 161)',
    fontSize: RFValue(14),
    marginBottom: RFPercentage(3),
  },
  button: {
    marginTop: RFPercentage(5),
  },
})

export default EditProfileScreen
