import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';


export default function IconButton({icon,onPress, style}:{icon:string,onPress:Function,style?:any}) {
    return (
        <Button style={{...RemoteButton.button,...style}} contentStyle={{minHeight:60,marginLeft:-32,transform:[{scale:2}]}} labelStyle={{display:"none"}} icon={icon} mode="outlined" onPress={()=>onPress()}>{null}</Button>
    );
}

const styles = StyleSheet.create({
    
});
