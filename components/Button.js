import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonCustom(props) {
    return (
        <TouchableOpacity onPress={props.action}>
            <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        borderRadius: 10,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "blue",
    },
    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
        marginVertical: 5,
    }
})