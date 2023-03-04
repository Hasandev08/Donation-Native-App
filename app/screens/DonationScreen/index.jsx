import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import DonationList from '../../components/DonationList'
import { homeData } from '../../config/homeData'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const DonationScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Live Donations</Text>
        <DonationList
          image={require('../../../assets/home.png')}
          header='Item Name'
          quantity='200 Packets'
          time='1:30 AM'
          date='23/05/2023'
          check={true}
        />
        <Text style={styles.heading}>Your Donations</Text>
        {homeData.map((item) => (
          <>
            <DonationList
              image={item.image}
              header={item.header}
              quantity={item.quantity}
              time={item.time}
              date={item.date}
              check={false}
            />
          </>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFPercentage(2),
    marginTop: RFPercentage(3),
  },
})

export default DonationScreen
