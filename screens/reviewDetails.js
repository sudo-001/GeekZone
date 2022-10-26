import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyle } from '../styles/global';
import { images } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewDetails({ route, navigation }) {
    const { item } = route.params;

    return (
        <View style={globalStyle.container}>
            <Card>
                <Text style={globalStyle.titleText}>{item.title}</Text>
                <Text style={globalStyle.paragraph}>{item.body}</Text>
                <View style={styles.ratingContainer}>
                    <Text>Rating : </Text>
                    <Image source={images.rating[item.rating]} style={styles.ratingImage} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: "#eee",
    },
    ratingImage: {
        height: 30,
    }
})