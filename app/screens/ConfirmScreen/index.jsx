import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Card from '../../components/Card'
import ProfileButton from '../../components/common/ProfileButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const ConfirmScreen = ({ navigation, route }) => {
  const item = route.params

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Confirm Requests</Text>
        <Card item={item} />
      </View>
      <View style={styles.footer}>
        <ProfileButton navigation={navigation} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0.9,
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginVertical: RFPercentage(3),
  },
  footer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.1,
    marginBottom: RFPercentage(2),
    marginRight: RFPercentage(3),
  },
})

export default ConfirmScreen
