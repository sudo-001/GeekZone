import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/global';
import * as webBrowser from 'expo-web-browser';

export default function About({ navigation }) {

    const handleFollowPress = () => {
        webBrowser.openBrowserAsync("https://wa.me/+237690521563");
    }

    return (
        <View style={{ ...globalStyle.container, ...styles.aboutContainer }}>
            <Image source={require('../assets/images/logo.png')} style={styles.aboutImage} />
            <Text style={{ ...globalStyle.titleText, ...styles.title }}>GeekZone</Text>
            <Text style={styles.paragraph}>We are a young team of programmer passionate about openSource and setf-though</Text>
            <TouchableOpacity style={styles.contactMe} onPress={handleFollowPress}>
                <Text>Follow us</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        alignItems: "center",
    },
    aboutImage: {
        height: 120,
        width: 120,
        marginTop: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 18,
    },
    contactMe: {
        backgroundColor: "#71AAAD",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
    }
})