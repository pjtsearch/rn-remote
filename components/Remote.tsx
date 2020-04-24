import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Remote, HLayout } from 'remote-lib';
import HLayoutComp from "./HLayout"

export default function CompRemote({remote}:{remote:Remote}) {
    const layout = remote.layout

    return (
    <View style={styles.rows}>
        {layout.map((row,i)=>
            <View key={i} style={styles.columns}>
                {row.map((col,i)=>
                    <View key={i} style={{flexGrow:1}}>
                        {col instanceof HLayout &&
                            <HLayoutComp layout={col}></HLayoutComp>
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
        flexGrow:1,
        flexDirection:"column",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch"
    },
    columns:{
        display:"flex",
        flexGrow:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"stretch",
        alignItems:"stretch"
    }
});
