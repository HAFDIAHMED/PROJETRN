import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import Login from './login';
import Register from './register';

function Root(props) {
    const Stack=createStackNavigator();
    const MyScreens=()=>{
        return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        );
    }
    return (
        <NavigationContainer>
            <MyScreens/>
        </NavigationContainer>
    );
}

export default Root;