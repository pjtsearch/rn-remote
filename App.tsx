import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Remote from "./components/Remote"
import {fios} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  roundness: 7,
  dark:true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Remote remote={fios}/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:"black",
    flex:1
  },
});
