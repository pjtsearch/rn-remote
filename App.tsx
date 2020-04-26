import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Remote from "./components/Remote"
import {NookFios,NookRoku} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton, Surface, Button } from 'react-native-paper';
import { vscale, scale } from './utils/scale';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Animatable from 'react-native-animatable';
import { house } from './House';

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
  useEffect(() =>{
    setTimeout(()=>StatusBar.setBackgroundColor("#448aff"),800)
  },[])
  const [remote,$remote] = useState(NookFios)
  let [fontsLoaded] = useFonts({
    'Google Sans Medium': require('./assets/fonts/GoogleSansMedium.ttf'),
    'Google Sans': require('./assets/fonts/GoogleSans.ttf'),
  });
  var [menuView,$menuView]:any = useState({});
  var [surfaceTitle,$surfaceTitle]:any = useState({});
  var [surfaceView,$surfaceView]:any = useState({});
  const menuItems = house.rooms.flat().map(room=>room.remotes).flat()
  // const handleMenuViewRef = (ref:any) => menuView = ref;
  // const handleSurfaceViewRef = (ref:any) => surfaceView = ref;
  // const handleSurfaceTitleRef = (ref:any) => {surfaceTitle = ref;console.log(!surfaceTitle);}

  let [menuOpen,$menuOpen] = useState(false)
  const toggleMenu = () => {
    if (!menuOpen){
      menuView.animate({ 0: { height: "0%" }, 1: { height: "81%"} });
      surfaceView.animate({0: { opacity:1 }, 1: { opacity:0 } })
      setTimeout(()=>{
        surfaceTitle.animate({0: { opacity:0,height:0}, 1: { opacity:1,height:30} })
      },100)
      $menuOpen(true)
    }else {
      surfaceTitle.animate({0: { opacity:1,height:30}, 0.5: { opacity:0, height:0}, 1:{opacity:0, height:0} })
      menuView.animate({ 0: { height: "81%" }, 1: { height: "0%"} });
      surfaceView.animate({0: { opacity:0 }, 1: { opacity:1 } })
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
            <IconButton icon="menu" color="white" onPress={()=>toggleMenu()}></IconButton>
            <Text style={styles.title}>{remote.name}</Text>
            <IconButton icon="dots-vertical" color="white"></IconButton>
          </View>
          <Animatable.View style={{height:0,overflow:"hidden"}} ref={$menuView} duration={500}>
            {menuItems.map((item,i)=>
              <Button mode="outlined" color="white" style={{margin:10,borderWidth:2}} onPress={()=>{$remote(item);toggleMenu()}} key={i}>{item.name}</Button>
            )}
          </Animatable.View>
          <TouchableWithoutFeedback onPress={()=>{if(menuOpen)toggleMenu()}}>
            <Surface style={styles.surface}>
              <Animatable.Text style={{...styles.title,opacity:0,height:0}} ref={$surfaceTitle}>{remote.name}</Animatable.Text>
              <Animatable.View ref={$surfaceView} duration={500}>
                <Remote remote={remote}/>
              </Animatable.View>
            </Surface>
          </TouchableWithoutFeedback>
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
