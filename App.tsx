import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Remote from "./components/Remote"

export default function App() {
  return (
    <View style={styles.container}>
      <Remote/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
