import React from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import colors from '../../config/colors'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Card = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upper}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.header}>{item.title}</Text>
        </View>
        <View style={styles.lower}>
          <View>
            <Text style={styles.element}>Quantity: {item.quantity}</Text>
            <Text style={styles.element}>Location - {item.location}</Text>
            <Text style={styles.element}>Need Before - {item.deliver}</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ fontSize: RFValue(10), fontWeight: 'bold' }}>Description:</Text>
            <Text style={{ fontSize: RFValue(10), marginTop: RFPercentage(1) }}>
              {item.details}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{ fontWeight: 'bold' }}>CONFIRM</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(233, 244, 243)',
    borderRadius: RFValue(12),
    elevation: 2,
    height: RFPercentage(60),
    justifyContent: 'space-around',
    paddingHorizontal: RFPercentage(3),
    width: '90%',
  },
  upper: {
    alignItems: 'center',
    height: RFPercentage(25),
    justifyContent: 'space-around',
  },
  lower: {
    height: RFPercentage(25),
    justifyContent: 'space-around',
  },
  image: {
    borderRadius: RFPercentage(50),
    height: RFPercentage(12),
    width: RFPercentage(12),
  },
  header: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    paddingHorizontal: RFPercentage(5),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  element: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  description: {
    backgroundColor: colors.white,
    borderRadius: RFValue(10),
    justifyContent: 'space-around',
    paddingLeft: RFPercentage(1),
    paddingRight: RFPercentage(5),
    paddingVertical: RFPercentage(1),
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: RFValue(10),
    height: RFPercentage(3.5),
    justifyContent: 'center',
    marginLeft: RFPercentage(20),
    marginTop: RFPercentage(5),
    width: RFPercentage(17),
  },
})

export default Card
