import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Remote from "./components/Remote"
import {fios} from "./remotes"

export default function App() {
  return (
    <View style={styles.container}>
      <Remote remote={fios}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:"black",
    flex:1
  },
});
