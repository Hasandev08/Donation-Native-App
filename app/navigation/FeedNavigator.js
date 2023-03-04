import React from 'react'

import FirstScreen from '../screens/WelcomeScreens/FirstScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SecondScreen from '../screens/WelcomeScreens/SecondScreen'
import SignupScreen from '../screens/SignupScreen'
import ThirdScreen from '../screens/WelcomeScreens/ThirdScreen'

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
  </Stack.Navigator>
)

export default FeedNavigator
