import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Device,HttpAction,Macro,Remote,HLayout } from "remote-lib";


export default function CompRemote() {
    (async ()=>{
        const TVBase = "http://10.0.2.105:1234"
        const TV = new Device({name:"TV",actions:[
            new HttpAction({
                name:"on",
                method:"GET",
                base:TVBase,
                path:"/tvon"
            }),
            new HttpAction({
                name:"off",
                method:"GET",
                base:TVBase,
                path:"/tvoff"
            }),
        ]})

        const STBBase = "http://10.0.2.105:1234"
        const STB = new Device({name:"STB",actions:[
            new HttpAction({
                name:"on",
                method:"GET",
                base:STBBase,
                path:"/stbon"
            }),
            new HttpAction({
                name:"off",
                method:"GET",
                base:STBBase,
                path:"/stboff"
            }),
        ]})

        const fios = new Remote({name:"Fios",layout:[
            {
                left:null,
                center:null,
                right:new HLayout([
                    new Macro({name:"on",actions:[
                        TV.getAction("on"),
                        STB.getAction("on")
                    ]})
                ])
            },
            {
                left:null,
                center:null,
                right:null
            },
            {
                left:null,
                center:null,
                right:null
            },
            {
                left:null,
                center:null,
                right:null
            }
        ]})

        console.log(fios)
    })()

    return (
    <View style={styles.container}>
        <Grid>
            <Row>
                <Col><Text>1</Text></Col>
                <Col><Text>2</Text></Col>
                <Col><Text>3</Text></Col>
            </Row>
        </Grid>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
