import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import ProfileList from '../../components/ProfileList'
import { profileList, profileSecondList } from '../../config/profileList'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Image source={require('../../../assets/request.png')} style={styles.image} />
      <Text style={styles.title}>End Poverty Welfare Society</Text>
      <Text style={styles.subTitle}>Non Governmental Organization</Text>
      <FlatList
        data={profileList}
        renderItem={({ item }) => <ProfileList icon={item.icon} listTitle={item.listTitle} />}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: RFPercentage(3) }}
      />
      <FlatList
        data={profileSecondList}
        renderItem={({ item }) => <ProfileList icon={item.icon} listTitle={item.listTitle} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginVertical: RFPercentage(2),
  },
  image: {
    borderRadius: RFValue(50),
    height: RFPercentage(15),
    marginBottom: RFPercentage(3),
    width: RFPercentage(15),
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: '500',
    marginBottom: RFPercentage(1),
    textDecorationLine: 'underline',
  },
  subTitle: {
    color: 'rgb(161, 161, 161)',
    fontSize: RFValue(14),
    marginBottom: RFPercentage(3),
  },
})

export default ProfileScreen
