import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ArrowLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';


export default function VLayoutComp({layout}:{layout:ArrowLayout}) {

    return (
    <View style={styles.VLayout}>
        <Button mode="outlined" style={RemoteButton.button} onPress={()=>layout.left.run()}>{layout.left.name}</Button>
    </View>
    );
}

const styles = StyleSheet.create({
    VLayout: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch"
    },
    flexItem:{
        flex:1,
        margin:5
    }
});
