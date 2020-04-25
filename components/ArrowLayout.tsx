import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ArrowLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import IconButton from './IconButton';


export default function VLayoutComp({layout}:{layout:ArrowLayout}) {

    return (
    <View style={styles.ArrowLayout}>
            <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <IconButton style={{maxWidth:70,margin:2}} icon={layout.top.icon} onPress={()=>layout.top.run()}></IconButton>
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <IconButton style={{maxWidth:70,margin:2}} icon={layout.left.icon} onPress={()=>layout.left.run()}></IconButton>
                <IconButton style={{maxWidth:70,margin:2}} icon={layout.center.icon} onPress={()=>layout.center.run()}></IconButton>
                <IconButton style={{maxWidth:70,margin:2}} icon={layout.right.icon} onPress={()=>layout.right.run()}></IconButton>
            </View>
            <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <IconButton style={{maxWidth:70,margin:2}} icon={layout.bottom.icon} onPress={()=>layout.bottom.run()}></IconButton>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    ArrowLayout: {
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        maxWidth:"auto"
    },
    flexItem:{
        margin:5
    }
});
