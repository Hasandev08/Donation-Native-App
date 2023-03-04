import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import colors from '../../config/colors'

import { RFPercentage } from 'react-native-responsive-fontsize'

const AppNextButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <AntDesign name='arrowright' size={32} color={colors.black} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100,
    height: RFPercentage(8),
    justifyContent: 'center',
    width: RFPercentage(8),
  },
})

export default AppNextButton
