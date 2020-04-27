import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Remote from "./components/Remote"
import {NookFios,NookRoku} from "./remotes"
import { Provider as PaperProvider, DefaultTheme, IconButton, Surface, Button } from 'react-native-paper';
import { vscale, scale } from './utils/scale';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing,concat } = Animated;
import { house } from './House';
import { nookTV, centralMatrix } from './devices';
import { centralAudioReceiver } from './devices/audioReceiver';

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
    // console.log(nookTV.getAction("on").run())
    // console.log(centralMatrix.getAction("o1i1").run())
    setTimeout(()=>StatusBar.setBackgroundColor("#448aff"),800)
  },[])
  const [remote,$remote] = useState(NookFios)
  let [fontsLoaded] = useFonts({
    'Google Sans Medium': require('./assets/fonts/GoogleSansMedium.ttf'),
    'Google Sans': require('./assets/fonts/GoogleSans.ttf'),
  });
  // var [menuView,$menuView]:any = useState({});
  // var [menuTitle,$menuTitle]:any = useState({});
  // var [menuButton,$menuButton]:any = useState({});
  // var [surfaceTitle,$surfaceTitle]:any = useState({});
  // var [surfaceView,$surfaceView]:any = useState({});
  const menuItems = house.rooms.flat().map(room=>room.remotes).flat()
  // const handleMenuViewRef = (ref:any) => menuView = ref;
  // const handleSurfaceViewRef = (ref:any) => surfaceView = ref;
  // const handleSurfaceTitleRef = (ref:any) => {surfaceTitle = ref;console.log(!surfaceTitle);}
  const [menuHeight] = useState(new Value(0))
  const [remoteOpacity] = useState(new Value(1))
  const [surfaceTitleOpacity] = useState(new Value(0))
  const [surfaceTitleHeight] = useState(new Value(0))

  let [menuOpen,$menuOpen] = useState(false)
  const toggleMenu = () => {
    if (!menuOpen){
      // // menuView.animate({ 0: { height: "0%" }, 1: { height: "81%"} });
      // // surfaceView.animate({0: { opacity:1 }, 1: { opacity:0 } })
      // // setTimeout(()=>{
      // //   surfaceTitle.animate({0: { opacity:0,height:0}, 1: { opacity:1,height:30} })
      // // },100)
      // menuTitle.animate({0: { opacity:1 }, 1: { opacity:0 } })
      // menuButton.animate({0: { opacity:1 }, 1: { opacity:0 } })
      // $menuOpen(true)
      // menuTitle.animate({0: { opacity:0 }, 1: { opacity:1 } })
      // menuButton.animate({0: { opacity:0 }, 1: { opacity:1 } })
      timing(menuHeight, {
        duration: 400,
        toValue: 81,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
      timing(remoteOpacity, {
        duration: 400,
        toValue: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
      setTimeout(()=>{
        timing(surfaceTitleOpacity, {
          duration: 400,
          toValue: 1,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }).start()
        timing(surfaceTitleHeight, {
          duration: 400,
          toValue: 30,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }).start()
      },100)
      $menuOpen(true)
    }else {
      // // surfaceTitle.animate({0: { opacity:1,height:30}, 0.5: { opacity:0, height:0}, 1:{opacity:0, height:0} })
      // // menuView.animate({ 0: { height: "81%" }, 1: { height: "0%"} });
      // // surfaceView.animate({0: { opacity:0 }, 1: { opacity:1 } })
      // menuTitle.animate({0: { opacity:0 }, 1: { opacity:1 } })
      // menuButton.animate({0: { opacity:1 }, 1: { opacity:0 } })
      // $menuOpen(false)
      // menuTitle.animate({0: { opacity:0 }, 1: { opacity:1 } })
      // menuButton.animate({0: { opacity:0 }, 1: { opacity:1 } })
      timing(surfaceTitleOpacity, {
        duration: 200,
        toValue: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
      timing(surfaceTitleHeight, {
        duration: 200,
        toValue: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
      timing(menuHeight, {
        duration: 400,
        toValue: 0,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
      timing(remoteOpacity, {
        duration: 400,
        toValue: 1,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }).start()
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
            <Animated.View>
              <IconButton icon={menuOpen ? "arrow-left":"menu"} color="white" onPress={()=>toggleMenu()}></IconButton>
            </Animated.View>
            <Animated.Text style={styles.title}>{menuOpen ? "Menu" : remote.name}</Animated.Text>
            <IconButton icon="dots-vertical" color="white"></IconButton>
          </View>
          <Animated.View style={{height:concat(menuHeight.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 100],
        }),"%"),overflow:"hidden"}}>
            {menuItems.map((item,i)=>
              <Button mode={"outlined"} color="white" style={{margin:10,borderWidth:2,backgroundColor:item == remote?"#ffffff77":"transparent"}} onPress={()=>{$remote(item);toggleMenu()}} key={i}>{item.name}</Button>
            )}
          </Animated.View>
          <TouchableWithoutFeedback onPress={()=>{if(menuOpen)toggleMenu()}}>
            <Surface style={styles.surface}>
              <Animated.Text style={{...styles.title,opacity:surfaceTitleOpacity,height:surfaceTitleHeight}}>{remote.name}</Animated.Text>
              <Animated.View style={{opacity:remoteOpacity}}>
                <Remote remote={remote}/>
              </Animated.View>
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
