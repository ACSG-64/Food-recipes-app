import 'react-native-gesture-handler';

import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Categories from "./screens/Categories";
import Overview from "./screens/Overview";
import Recipe from "./screens/Recipe";

import Colors from "./res/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Categories"
                    screenOptions={{
                        headerStyle: {backgroundColor: Colors.brown},
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: Colors.darkBrown}
                    }}>
                    <Stack.Screen name="Categories" component={Categories}/>
                    <Stack.Screen name="Overview" component={Overview}/>
                    <Stack.Screen name="Recipe" component={Recipe}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
