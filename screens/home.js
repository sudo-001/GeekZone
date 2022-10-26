import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/Card';
import { globalStyle } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../components/reviewForm';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: "Nodejs, a powerfull backend asynchronous language", rating: 5, body: "Nodejs is a wonderfull backend javascript language", key: '1' },
        { title: "Reactjs⚛️ ", rating: 3, body: "Reactjs is a wonderfull frontend UI javascript library", key: '2' },
    ]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const addReview = (review) => {

        setReviews((previousReviews) => {

            return ([
                { ...review, 'key': previousReviews.length + 1 },
                ...previousReviews
            ])
        });

        setModalIsOpen(false);
    }


    return (
        <View style={globalStyle.container}>


            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <Modal visible={modalIsOpen} animationType='slide'>
                    <MaterialIcons name="close" onPress={() => setModalIsOpen(false)} size={30} style={{ ...styles.modalBtn, ...styles.modalBtnClose }} />

                    <ScrollView style={globalStyle.container}>
                        <ReviewForm addReview={addReview} />
                    </ScrollView>
                </Modal>
            </TouchableWithoutFeedback>


            <MaterialIcons name="add" onPress={() => setModalIsOpen(true)} size={30} style={styles.modalBtn} />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
                        <Card>
                            <Text style={globalStyle.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalBtn: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#eee",
        marginVertical: 10,
        alignSelf: "center",
        padding: 5,
    },
    modalBtnClose: {
        marginTop: 30,
    }
})