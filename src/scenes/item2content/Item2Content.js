import React, { useState, useCallback, useRef } from "react"
import { StyleSheet, Text, View, StatusBar, ScrollView, useWindowDimensions } from 'react-native'
import { useRoute } from '@react-navigation/native'
import RenderHtml from 'react-native-render-html'
import YoutubePlayer from "react-native-youtube-iframe"
import Button from 'components/Button'

export default function Item2Content() {
  const route = useRoute()
  const data = route.params.data
  const [playing, setPlaying] = useState(false)
  const { width } = useWindowDimensions()

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const source = {
    html: data.content
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={data.videoid}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      <ScrollView>
        <Text style={styles.title}>{data.title}</Text>
        <RenderHtml
          contentWidth={width}
          source={source}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
});