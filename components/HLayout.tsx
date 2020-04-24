import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import { HLayout } from 'remote-lib';

export default function HLayoutComp({layout}:{layout:HLayout}) {
    const actions = layout.actions

    return (
    <View style={styles.HLayout}>
        {actions.map((action,i)=>
            <View style={styles.flexItem} key={i}><Button title={action.name} onPress={()=>action.run()}/></View>
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
        alignItems:"stretch"
    },
    flexItem:{
        flexGrow:1,
    }
});
