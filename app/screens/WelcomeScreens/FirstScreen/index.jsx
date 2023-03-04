import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppNextButton from '../../../components/AppNextButton'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/welcome1.png')} />
      <Text style={styles.text}>
        You have two hands one to help yourself, the second to help others.
      </Text>
      <AppNextButton onPress={() => navigation.navigate('SecondScreen')} />
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

export default FirstScreen
