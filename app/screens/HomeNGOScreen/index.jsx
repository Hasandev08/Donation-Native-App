import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import HomeButton from '../../components/HomeButton'
import ProfileButton from '../../components/common/ProfileButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const HomeNGOScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.opening}>Welcome Back End Poverty Welfare Society</Text>
        <Image source={require('../../../assets/request.png')} />
        <HomeButton
          title='Donation Requests'
          onPress={() => navigation.navigate('NGOFormScreen')}
        />
        <HomeButton title='Request History' onPress={() => navigation.navigate('DonationScreen')} />
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
    paddingVertical: RFPercentage(15),
  },
  opening: {
    fontSize: RFValue(20),
    fontWeight: '900',
    paddingHorizontal: RFPercentage(8),
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

export default HomeNGOScreen
