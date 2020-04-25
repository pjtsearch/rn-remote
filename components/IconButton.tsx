import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';


export default function IconButton({icon,onPress}:{icon:string,onPress:Function}) {
    return (
        <Button style={RemoteButton.button} contentStyle={{minHeight:40,marginLeft:-15}} labelStyle={{display:"none"}} icon={icon} mode="outlined" onPress={()=>onPress()}>{null}</Button>
    );
}

const styles = StyleSheet.create({
    
});
