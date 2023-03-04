import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: RFValue(30),
    height: RFPercentage(8),
    justifyContent: 'center',
    width: RFPercentage(40),
  },
  text: {
    color: colors.black,
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
})
export default AppButton
