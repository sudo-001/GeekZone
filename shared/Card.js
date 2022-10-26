import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Card(props) {

    return (
        <View style={styles.card}>

            <View style={styles.content}>

                {props.children}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "#fff",
        marginHorizontal: 2,
        marginVertical: 10,
        elevation: 3,
        shadowOpacity: 0.3,
        shadowColor: "#333",
    },
    content: {
        margin: 10,
    }
})