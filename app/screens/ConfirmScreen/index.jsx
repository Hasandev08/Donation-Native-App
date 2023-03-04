import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Card from '../../components/Card'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const ConfirmScreen = ({ route }) => {
  const item = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Confirm Requests</Text>
      <Card item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginVertical: RFPercentage(3),
  },
})

export default ConfirmScreen
