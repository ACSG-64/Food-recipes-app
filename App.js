import 'react-native-gesture-handler';

import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";

import Categories from "./screens/Categories";
import Overview from "./screens/Overview";
import Recipe from "./screens/Recipe";
import Bookmarks from "./screens/Bookmarks";

import Colors from "./res/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {backgroundColor: Colors.brown},
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: Colors.darkBrown},
                drawerContentStyle: {backgroundColor: Colors.brown},
                drawerInactiveTintColor: 'white',
                drawerActiveBackgroundColor: Colors.lightBrown,
                drawerActiveTintColor: Colors.brown,
            }}>
            <Drawer.Screen name="Categories" component={Categories}
                           options={{
                               title: 'Food categories',
                               drawerIcon: ({color, size}) =>
                                   <Ionicons name="book" size={size} color={color}/>,
                           }}/>
            <Drawer.Screen name="Bookmarks" component={Bookmarks}
                           options={{
                               title: 'Bookmarks',
                               drawerIcon: ({color, size}) =>
                                   <Ionicons name="bookmarks" size={size} color={color}/>,
                           }}/>
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Drawer"
                    screenOptions={{
                        headerStyle: {backgroundColor: Colors.brown},
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: Colors.darkBrown}
                    }}>
                    <Stack.Screen name="Drawer" component={DrawerNavigator}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name="Overview" component={Overview}/>
                    <Stack.Screen name="Recipe" component={Recipe}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
