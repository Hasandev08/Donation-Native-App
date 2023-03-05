import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import AppButton from '../../components/common/AppButton'
import AppTextInput from '../../components/AppTextInput'
import DropdownComponent from '../../components/common/DropdownComponent'
import ProfileButton from '../../components/common/ProfileButton'

import colors from '../../config/colors'
import { donationForm } from '../../config/donationForm'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const DonationFormScreen = ({ navigation }) => {
  const data = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' },
  ]
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Food Details:</Text>
        {donationForm.map((item) => (
          <View key={item.id.toString()}>
            <AppTextInput placeholder={item.placeholder} />
          </View>
        ))}
        <DropdownComponent data={data} placeholder='Utensils' />
        <View style={styles.description}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            style={styles.textInput}
            placeholder='Address'
          />
        </View>
        <View style={styles.button}>
          <AppButton title='Submit' onPress={() => navigation.navigate('HomeScreen')} />
        </View>
      </View>
      <View style={styles.footer}>
        <ProfileButton navigation={navigation} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginTop: RFPercentage(2),
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    margin: RFPercentage(3),
  },
  description: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: RFValue(12),
    marginVertical: RFPercentage(1),
    paddingBottom: RFPercentage(7),
    paddingLeft: RFPercentage(2),
    width: RFPercentage(41),
  },
  button: {
    alignItems: 'center',
    marginTop: RFPercentage(3),
  },
  footer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.1,
    marginBottom: RFPercentage(2),
    marginRight: RFPercentage(3),
  },
})

export default DonationFormScreen
