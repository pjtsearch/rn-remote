import React from 'react';
import { StyleSheet, Text, View,Dimensions, Vibration } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';
import { scale, vscale } from '../utils/scale';


export default function IconButton({icon,onPress, style}:{icon?:string,onPress:Function,style?:any}) {
    const height = 60 * vscale
    return (
        <Button style={{...RemoteButton.button,...style}} contentStyle={{minHeight:height,marginLeft:-32,transform:[{scale:2}]}} labelStyle={{display:"none"}} icon={icon} mode="outlined" onPress={()=>{onPress();Vibration.vibrate(10)}}>{null}</Button>
    );
}

const styles = StyleSheet.create({
    
});
