import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { AntDesign } from '@expo/vector-icons'

const ProfileList = ({ icon, listTitle, route, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(route)}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.components}>
          <Text style={styles.title}>{listTitle}</Text>
          <AntDesign name='right' size={24} color='rgb(112, 112, 112)' />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: RFPercentage(1),
    width: '90%',
  },
  icon: {
    alignItems: 'center',
    backgroundColor: 'rgb(231, 255, 249)',
    borderRadius: RFValue(12),
    height: RFPercentage(8),
    justifyContent: 'center',
    marginHorizontal: RFPercentage(2),
    width: RFPercentage(8),
  },
  components: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '78%',
  },
  title: {
    color: 'rgb(112, 112, 112)',
    fontSize: RFValue(14),
  },
})

export default ProfileList
