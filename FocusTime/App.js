import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import {Focus}  from './src/features/focus/Focus';
export default function App() {
  const [focusSubject,setFocusSubject] = useState("Suman")
  return (
    <View style={styles.container}>
      <Text>{focusSubject} </Text>
      <Focus/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    flex: 1,
    backgroundColor: '#252250',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
