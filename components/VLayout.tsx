import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { VLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';
import IconButton from './IconButton';
import { scale } from '../utils/scale';


export default function VLayoutComp({layout}:{layout:VLayout}) {
    const actions = layout.actions

    return (
    <View style={styles.VLayout}>
        {actions.map((action,i)=>
            <View style={styles.flexItem} key={i}>
                <IconButton icon={action.icon} onPress={()=>action.run()}></IconButton>
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
        margin:2 * scale
    }
});
