import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';
import IconButton from './IconButton';


export default function VLayoutComp({layout}:{layout:VLayout}) {
    const actions = layout.actions

    return (
    <View style={styles.VLayout}>
        {actions.map((action,i)=>
            <View style={styles.flexItem} key={i}>
                <IconButton icon="power" onPress={()=>action.run()}></IconButton>
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    VLayout: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"stretch",
        alignItems:"stretch"
    },
    flexItem:{
        margin:2
    }
});
