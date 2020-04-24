import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    
  },
});
