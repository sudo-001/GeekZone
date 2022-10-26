import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyle } from '../styles/global';
import * as yup from 'yup';
import ButtonCustom from './Button';

const formSchemaValidation = yup.object({
    title: yup.string()
        .required("title is required")
        .min(4),

    body: yup.string()
        .required("Body is required"),

    rating: yup.string()
        .required("Rating is required")
        .test("Rating-test-1-5", "Your rating value may be between 1 and 5 include", (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
});

export default function ReviewForm(props) {
    return (
        <Formik
            initialValues={{ title: '', body: '', rating: '' }}
            onSubmit={(values) => {
                props.addReview(values);
            }}
            validationSchema={formSchemaValidation}
        >
            {(props) => (
                <View style={globalStyle.container}>
                    <TextInput
                        placeholder='Enter the title of your article'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        style={globalStyle.inputField}
                    />
                    <Text style={globalStyle.errorMessage} >{props.touched.title && props.errors.title}</Text>

                    <TextInput
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        placeholder="Enter the body of your article"
                        multiline
                        style={globalStyle.inputField}
                    />
                    <Text style={globalStyle.errorMessage} >{props.touched.body && props.errors.body}</Text>


                    <TextInput
                        placeholder='rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType="numeric"
                        style={globalStyle.inputField}
                    />
                    <Text style={globalStyle.errorMessage} >{props.touched.rating && props.errors.rating}</Text>


                    <ButtonCustom title="Submit" action={props.handleSubmit} style={globalStyle.formBtn} />
                </View>
            )}
        </Formik>
    )
}