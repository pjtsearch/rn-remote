import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Remote from "./components/Remote"
import {fios} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton } from 'react-native-paper';
import { vscale } from './utils/scale';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

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
  let [fontsLoaded] = useFonts({
    'Google Sans Medium': require('./assets/fonts/GoogleSansMedium.ttf'),
    'Google Sans': require('./assets/fonts/GoogleSans.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:theme.colors.primary,
    flex:1
  },
  title:{
    fontSize:21,
    fontWeight:"normal",
    marginTop:12 * vscale,
    textAlign:"center",
    color:"white",
    fontFamily:"Google Sans Medium"
  }
});
