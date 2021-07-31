import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { Divider } from 'react-native-elements'

export default function Item2() {
  const navigation = useNavigation()
  const route = useRoute()
  const [data, setData] = useState([])

  const fetchData = async () => {
    const result = await axios.get(
      'https://appmenu.microcms.io/api/v1/content',
    {
      headers: { 'X-API-KEY': '55550639-4557-4342-9fc8-b8262245ae32' }
    }
      )
    setData(result.data.contents)
    console.log(data)
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView style={{width:'100%'}}>
      {
        data?
        data.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate('Item2Content', { data: item })}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Divider />
            </TouchableOpacity>
          )
        }):
        <Text>item2 screen</Text>
      }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
})