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
    primary: '#8c9eff',
    accent: '#8c9eff',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={{fontSize:25,fontWeight:"bold",margin:18,marginTop:3,textAlign:"center",color:"white"}}>Nook</Text>
        <Remote remote={fios}/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:"#424242",
    flex:1
  },
});
