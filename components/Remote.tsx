import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Remote, HLayout, VLayout } from 'remote-lib';
import HLayoutComp from "./HLayout"
import VLayoutComp from './VLayout';

export default function CompRemote({remote}:{remote:Remote}) {
    const layout = remote.layout

    return (
    <View style={styles.rows}>
        {layout.map((row,i)=>
            <View key={i} style={styles.columns}>
                {row.map((col,i)=>
                    <View key={i}>
                        {col instanceof HLayout &&
                            <HLayoutComp layout={col}></HLayoutComp>
                        }
                        {col instanceof VLayout &&
                            <VLayoutComp layout={col}></VLayoutComp>
                        }
                    </View>
                )}
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
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
        alignItems:"stretch"
    }
});
