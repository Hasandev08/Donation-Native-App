import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const RequestList = ({ image, title, details, time, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.components}>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.elements}>{details}</Text>
          <Text style={styles.elements}>{time}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginLeft: RFPercentage(1),
    marginVertical: RFPercentage(2),
    paddingRight: RFPercentage(5),
    width: '85%',
  },
  image: {
    borderRadius: 50,
    height: RFPercentage(10),
    marginLeft: RFPercentage(1),
    marginRight: RFPercentage(3),
    width: RFPercentage(10),
  },
  components: {
    height: '70%',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  elements: {
    fontSize: RFValue(10),
    fontWeight: '500',
    paddingRight: RFPercentage(10),
  },
})

export default RequestList
