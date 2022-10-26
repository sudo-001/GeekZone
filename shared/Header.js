import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderComposition(props) {

    const toggleMenu = () => {
        props.navigation.openDrawer();
    }

    return (

        <View style={styles.wrapper}>

            <MaterialIcons name='menu' size={30} style={styles.button} onPress={toggleMenu} />

            <View style={styles.headerTitle}>
                <Image source={require('../assets/images/header.png')} style={styles.headerLogo} />
                <Text style={styles.title}>{props.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    },
    button: {
        position: 'absolute',
        left: 20,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerLogo: {
        width: 30,
        height: 30,
        marginRight: 5,
    }
})