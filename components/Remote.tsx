import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Remote } from 'remote-lib';

export default function CompRemote({remote}:{remote:Remote}) {
    const layout = remote.layout

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
