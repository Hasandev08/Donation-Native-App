import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import HomeButton from '../../components/HomeButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.opening}>Welcome Back Sariya's Sip N Bites!</Text>
      <Image source={require('../../../assets/home.png')} />
      <HomeButton title='Make a Donation' />
      <HomeButton title='Your Donations' />
      <HomeButton title='Donation Requests' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: RFPercentage(12),
  },
  opening: {
    fontSize: RFValue(20),
    fontWeight: '900',
    paddingHorizontal: RFPercentage(10),
    textAlign: 'center',
  },
})

export default HomeScreen
