import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Remote, HLayout, VLayout, ArrowLayout } from 'remote-lib';
import HLayoutComp from "./HLayout"
import VLayoutComp from './VLayout';
import ArrowLayoutComp from './ArrowLayout';
import { Surface } from 'react-native-paper';


export default function CompRemote({remote}:{remote:Remote}) {
    const layout = remote.layout

    return (
    <Surface style={styles.surface}>
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
                            {col instanceof ArrowLayout &&
                                <ArrowLayoutComp layout={col}></ArrowLayoutComp>
                            }
                        </View>
                    )}
                </View>
            )}
        </View>
    </Surface>
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
        alignItems:"stretch",
        marginBottom:20
    },
    surface:{
        borderRadius:25,
        padding:25,
        height:"100%",
        elevation:30,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        backgroundColor:"#000000"
    }
});
