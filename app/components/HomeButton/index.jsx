import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../../config/colors'

import { RFPercentage } from 'react-native-responsive-fontsize'

const HomeButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 5,
    height: RFPercentage(5),
    justifyContent: 'center',
    width: RFPercentage(27),
  },
})

export default HomeButton
