import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import HomeButton from '../../components/HomeButton'
import ProfileButton from '../../components/common/ProfileButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.opening}>Welcome Back Sariya's Sip N Bites!</Text>
        <Image source={require('../../../assets/home.png')} />
        <HomeButton
          title='Make a Donation'
          onPress={() => navigation.navigate('DonationFormScreen')}
        />
        <HomeButton title='Your Donations' onPress={() => navigation.navigate('DonationScreen')} />
        <HomeButton
          title='Donation Requests'
          onPress={() => navigation.navigate('RequestScreen')}
        />
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
    justifyContent: 'space-around',
    paddingVertical: RFPercentage(8),
  },
  opening: {
    fontSize: RFValue(20),
    fontWeight: '900',
    paddingHorizontal: RFPercentage(10),
    textAlign: 'center',
  },
  footer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.1,
    marginBottom: RFPercentage(2),
    marginRight: RFPercentage(3),
  },
})

export default HomeScreen
