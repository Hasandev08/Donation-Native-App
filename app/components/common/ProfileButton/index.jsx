import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../../config/colors'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProfileButton = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('ProfileScreen')}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='account' size={48} color={colors.primary} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(230, 237, 235)',
    borderRadius: RFValue(12),
    height: RFPercentage(8),
    justifyContent: 'center',
    width: RFPercentage(8),
  },
})

export default ProfileButton
