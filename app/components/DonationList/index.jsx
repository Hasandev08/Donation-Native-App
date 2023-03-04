import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const DonationList = ({ image, header, quantity, time, date, check }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.elements}>Quantity: {quantity}</Text>
        <Text style={styles.elements}>
          {check ? 'Time of Preparation - ' : 'Status: '}
          {time}
        </Text>
        <Text style={styles.elements}>Date: {date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(233, 244, 243)',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    height: RFPercentage(17),
    marginVertical: RFPercentage(2),
    paddingRight: RFPercentage(5),
    width: '90%',
  },
  image: {
    borderRadius: 50,
    height: RFPercentage(10),
    marginHorizontal: RFPercentage(2),
    width: RFPercentage(10),
  },
  header: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    paddingBottom: RFPercentage(1),
    paddingLeft: RFPercentage(5),
  },
  elements: {
    fontWeight: 'bold',
  },
})

export default DonationList
