import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';


export default function VLayoutComp({layout}:{layout:VLayout}) {
    const actions = layout.actions

    return (
    <View style={styles.VLayout}>
        
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
