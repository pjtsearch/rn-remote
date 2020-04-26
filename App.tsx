import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Remote from "./components/Remote"
import {fios,Roku,NookFios} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton, Surface } from 'react-native-paper';
import { vscale, scale } from './utils/scale';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Animatable from 'react-native-animatable';

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
  const remote = Roku
  let [fontsLoaded] = useFonts({
    'Google Sans Medium': require('./assets/fonts/GoogleSansMedium.ttf'),
    'Google Sans': require('./assets/fonts/GoogleSans.ttf'),
  });
  var view:any;
  const menuItems = [
    "test"
  ]
  const handleViewRef = (ref:any) => view = ref;
  let [menuOpen,$menuOpen] = useState(false)
  const toggleMenu = () => {
    if (!menuOpen){
      view.animate({ 0: { height: "0%" }, 1: { height: "91.25%" } });
      $menuOpen(true)
    }else {
      view.animate({ 0: { height: "91.25%" }, 1: { height: "0%"  } });
      $menuOpen(false)
    }
  }
  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <View style={{display:"flex", alignItems:"stretch", justifyContent:"space-between",flexDirection:"row"}}>
            <IconButton icon="arrow-left" color="white"></IconButton>
            <Text style={styles.title} onPress={()=>toggleMenu()}>{remote.name}</Text>
            <IconButton icon="dots-vertical" color="white"></IconButton>
          </View>
          <Animatable.View style={{height:0,overflow:"hidden"}} ref={handleViewRef} duration={500}>
            {menuItems.map((v,i)=>
              <Text key={i}>test</Text>
            )}
          </Animatable.View>
          <Surface style={styles.surface}>
            <Remote remote={remote}/>
          </Surface>
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
  },
  surface:{
    borderRadius:18,
    padding:25 * scale,
    height:"100%",
    elevation:30,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    backgroundColor:"#000000"
}
});
