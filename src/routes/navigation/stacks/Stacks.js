import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { Global } from '../Navigation'

import Item1 from 'scenes/item1'
import Item2 from 'scenes/item2'
import Item3 from 'scenes/item3'
import Item4 from 'scenes/item4'
import Item5 from 'scenes/item5'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export const ProfileNavigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  )
}

export const Item1Navigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Item1"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Item1"
        component={Item1}
        options={({ navigation }) => ({
          title: 'Item1',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export const Item2Navigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Item2"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Item2"
        component={Item2}
        options={({ navigation }) => ({
          title: 'Item2',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export const Item3Navigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Item3"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
        }
      }
    >
      <Stack.Screen
        name="Item3"
        component={Item3}
        options={({ navigation }) => ({
          title: 'Item3',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export const Item4Navigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Item4"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Item4"
        component={Item4}
        options={({ navigation }) => ({
          title: 'Item4',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}

export const Item5Navigator = () => {
  const { data } = useContext(Global)
  return (
    <Stack.Navigator
      initialRouteName="Item5"
      headerMode="screen"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: { backgroundColor: data.color?data.color.header:colors.darkPurple },
          headerTitleStyle: { fontSize: 18 },
        }
      }
    >
      <Stack.Screen
        name="Item5"
        component={Item5}
        options={({ navigation }) => ({
          title: 'Item5',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  )
}