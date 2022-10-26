import React from 'react';
import About from '../screens/about';
import Home from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/reviewDetails';
import HeaderComposition from '../shared/Header';


const Stack = createNativeStackNavigator();
export default function Root() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => {
                return (
                    {
                        headerTitle: ((props) => (<HeaderComposition {...props} title="GeekZone" navigation={navigation} />))
                    }
                )
            }} />
            <Stack.Screen name="Detail" component={ReviewDetails} options={{ title: "", backgroundColor: "#eee" }} />
            <Stack.Screen name="About" component={About} options={{ title: "About GeekZone" }} />
        </Stack.Navigator>
    )
}