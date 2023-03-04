import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppButton from '../../../components/common/AppButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/welcome2.png')} />
      <Text style={styles.text}>The best of you are those WHO FEED OTHERS</Text>
      <AppButton title='Get Started' onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: RFPercentage(10),
  },
  text: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    paddingHorizontal: RFPercentage(12),
    textAlign: 'center',
  },
})

export default ThirdScreen
