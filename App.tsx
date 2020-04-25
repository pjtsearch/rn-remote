import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Remote from "./components/Remote"
import {fios} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton } from 'react-native-paper';
import { vscale } from './utils/scale';


const theme = {
  ...DefaultTheme,
  roundness: 7,
  dark:true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#448aff',
    accent: '#448aff',
  },
};


export default function App() {
  const remote = fios
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
          <IconButton icon="arrow-left" color="white"></IconButton>
          <Text style={styles.title}>{remote.name}</Text>
          <IconButton icon="dots-vertical" color="white"></IconButton>
        </View>
        <Remote remote={remote}/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:theme.colors.primary,
    flex:1
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    margin:20 * vscale,
    marginTop:5* vscale,
    textAlign:"center",
    color:"white"
  }
});
