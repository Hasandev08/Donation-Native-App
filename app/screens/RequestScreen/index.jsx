import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import RequestList from '../../components/RequestList'
import { requestData } from '../../config/requestData'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const RequestScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donations Requests</Text>
      <FlatList
        data={requestData}
        renderItem={({ item }) => (
          <RequestList
            image={item.image}
            title={item.title}
            details={item.details}
            time={item.time}
            onPress={() => navigation.navigate('ConfirmScreen', item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: RFPercentage(10),
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFPercentage(2),
    marginTop: RFPercentage(3),
  },
})

export default RequestScreen
