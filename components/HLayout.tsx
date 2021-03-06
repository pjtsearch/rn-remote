import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { HLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';
import IconButton from "./IconButton"
import { scale } from '../utils/scale';


export default function HLayoutComp({layout}:{layout:HLayout}) {
    const actions = layout.actions

    return (
    <View style={styles.HLayout}>
        {actions.map((action,i)=>
            <View style={styles.flexItem} key={i}>
                <IconButton icon={action.icon} onPress={()=>action.run()}></IconButton>
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    HLayout: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch",
    },
    flexItem:{
        margin:2 * scale
    }
});
