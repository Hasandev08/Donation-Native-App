import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import RequestList from '../../components/RequestList'
import ProfileButton from '../../components/common/ProfileButton'
import { requestData } from '../../config/requestData'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const RequestScreen = ({ navigation }) => {
  return (
    <>
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
  },
})

export default RequestScreen
