import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppNextButton from '../../../components/AppNextButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/welcome3.png')} />
      <Text style={styles.text}>If you cant feed a hundred people, then just feed one.</Text>
      <AppNextButton onPress={() => navigation.navigate('ThirdScreen')} />
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

export default SecondScreen
