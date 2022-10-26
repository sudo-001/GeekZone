import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import HeaderComposition from '../shared/Header';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={({ navigation }) => {
                return (
                    {
                        headerTitle: ((props) => (<HeaderComposition {...props} title="About GeekZone" navigation={navigation} />))
                    }
                )
            }} />
        </Stack.Navigator>
    )
}