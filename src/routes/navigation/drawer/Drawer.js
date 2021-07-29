import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { Item1Navigator, Item2Navigator, Item3Navigator, Item4Navigator } from '../stacks'
import { Global } from '../Navigation'

const Drawer = createDrawerNavigator()

const DrawerMenuList = [
  TabNavigator,
  Item1Navigator,
  Item2Navigator,
  Item3Navigator,
  Item4Navigator
]

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  const { data } = useContext(Global)
  console.log(data)
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
            <Drawer.Screen key={i} name={item.label} component={DrawerMenuList[item.value]} />
          )
        }):
        <Drawer.Screen name="item" component={TabNavigator} />
      }
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
