import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { Item1Navigator, Item2Navigator, Item3Navigator, Item4Navigator, Item5Navigator } from '../stacks'
import { Global } from '../Navigation'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const Drawer = createDrawerNavigator()

const DrawerMenuList = [
  TabNavigator,
  Item1Navigator,
  Item2Navigator,
  Item3Navigator,
  Item4Navigator,
  Item5Navigator,
]

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  const { data } = useContext(Global)
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerMenuContainer}
      drawerStyle={{
        backgroundColor: data.color?data.color.drawer:'white',
      }}
    >
      {
        data.drawer?
        data.drawer.map((item, i) => {
          return (
            <Drawer.Screen
              key={i}
              name={item.label}
              component={DrawerMenuList[item.value]}
              options={{
                title: item.label,
                drawerIcon: ({focused, size}) => (
                  <FontIcon
                    name={item.icon}
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                  />
                ),
              }}
            />
          )
        }):
        <Drawer.Screen
          name="Home"
          component={TabNavigator} 
        />
      }
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
