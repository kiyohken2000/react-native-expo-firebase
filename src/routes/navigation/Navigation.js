import React, { useEffect, useState, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './drawer'
import { firebase } from '../../firebase'

export const Global = createContext();

export default function App() {
  const [data, setData] = useState([])
  const value = {
    data, setData,
  }

  useEffect(() => {
    const appRef = firebase.firestore().collection('appmenu')
    appRef
    .doc('config')
    .onSnapshot(function(document) {
      const appData = document.data()
      setData(appData)
    })
  }, []);

  return (
    <Global.Provider value={value}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Global.Provider>
  )
}
