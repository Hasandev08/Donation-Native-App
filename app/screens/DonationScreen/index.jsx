import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import DonationList from '../../components/DonationList'
import ProfileButton from '../../components/common/ProfileButton'

import { homeData, homeSecondData } from '../../config/homeData'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const DonationScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Live Donations</Text>
          {homeData.map((item) => (
            <View key={item.id.toString()} style={{ alignItems: 'center', width: '100%' }}>
              <DonationList
                image={item.image}
                header={item.header}
                quantity={item.quantity}
                time={item.time}
                date={item.date}
                check={false}
              />
            </View>
          ))}
          <Text style={styles.heading}>Your Donations</Text>
          {homeSecondData.map((item) => (
            <View key={item.id.toString()} style={{ alignItems: 'center', width: '100%' }}>
              <DonationList
                image={item.image}
                header={item.header}
                quantity={item.quantity}
                time={item.time}
                date={item.date}
                check={false}
              />
            </View>
          ))}
        </View>
      </ScrollView>
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
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFPercentage(2),
    marginTop: RFPercentage(3),
  },
  footer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.1,
    marginBottom: RFPercentage(2),
    marginRight: RFPercentage(3),
    marginTop: RFPercentage(10),
  },
})

export default DonationScreen
