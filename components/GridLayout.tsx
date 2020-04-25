import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GridLayout } from 'remote-lib';
import { Button } from 'react-native-paper';
import RemoteButton from '../styles/RemoteButton';
import IconButton from "./IconButton"
import { scale } from '../utils/scale';


export default function HLayoutComp({layout}:{layout:GridLayout}) {
    const rows = layout.actions

    return (
    <View style={styles.rows}>
        {rows.map((row,i)=>
            <View key={i} style={styles.columns}>
                {row.map((action,i)=>
                    <View style={styles.flexItem} key={i}>
                        <IconButton icon={action.icon} onPress={()=>action.run()}></IconButton>
                    </View>
                )}
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    flexItem:{
        margin:2 * scale
    },
    rows: {
        display:"flex",
        // flexGrow:1,
        flexDirection:"column",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch",
    },
    columns:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch",
    },
});
