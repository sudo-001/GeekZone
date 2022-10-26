import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/about';
import Root from './routes/HomeStack';
import AboutStack from './routes/AboutStack';


export const Draw = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Draw.Navigator screenOptions={{ headerShown: false }}>
        <Draw.Screen name="HomeStack" component={Root} options={{ title: "Home" }} />
        <Draw.Screen name="AboutStack" component={AboutStack} options={{ title: "About GeekZone" }} />
      </Draw.Navigator>
    </NavigationContainer>
  )

}
