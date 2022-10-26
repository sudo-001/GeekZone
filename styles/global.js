import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 20,
        color: "#333",
        fontWeight: "bold",
    },
    paragraph: {
        marginVertical: 15,
        lineHeight: 30,
        fontSize: 23,
    },
    bottomText: {
        color: "#333",
        fontSize: 20,
        fontWeight: "bold",
    },
    inputField: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    formBtn: {
        borderRadius: 10,
        marginBottom: 10,
    },
    errorMessage: {
        color: "red",
        textAlign: 'center',
    }
});

export const images = {
    rating: {
        '1': require('../assets/images/rating-1.png'),
        '2': require('../assets/images/rating-2.png'),
        '3': require('../assets/images/rating-3.png'),
        '4': require('../assets/images/rating-4.png'),
        '5': require('../assets/images/rating-5.png'),
    }
}