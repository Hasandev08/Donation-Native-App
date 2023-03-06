import React from 'react'

import ConfirmScreen from '../screens/ConfirmScreen'
import DonationFormScreen from '../screens/DonationFormScreen'
import DonationScreen from '../screens/DonationScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import FirstScreen from '../screens/WelcomeScreens/FirstScreen'
import HomeNGOScreen from '../screens/HomeNGOScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import NGOFormScreen from '../screens/NGOFormScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RequestScreen from '../screens/RequestScreen'
import SecondScreen from '../screens/WelcomeScreens/SecondScreen'
import SignupScreen from '../screens/SignupScreen'
import ThirdScreen from '../screens/WelcomeScreens/ThirdScreen'

import colors from '../config/colors'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator initialRouteName='FirstScreen'>
    <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }} />
    <Stack.Screen name='SecondScreen' component={SecondScreen} options={{ headerShown: false }} />
    <Stack.Screen name='ThirdScreen' component={ThirdScreen} options={{ headerShown: false }} />
    <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false }} />
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='DonationScreen'
      component={DonationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='RequestScreen' component={RequestScreen} options={{ headerShown: false }} />
    <Stack.Screen name='ConfirmScreen' component={ConfirmScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='DonationFormScreen'
      component={DonationFormScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name='HomeNGOScreen' component={HomeNGOScreen} options={{ headerShown: false }} />
    <Stack.Screen name='NGOFormScreen' component={NGOFormScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name='EditProfileScreen'
      component={EditProfileScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default FeedNavigator
