import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import HomeAdm from './pages/HomeAdm';
import HomeUser from './pages/HomeUser';
import NewUser from './pages/NewUser';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="HomeAdm" component={HomeAdm} />
                <AppStack.Screen name="HomeUser" component={HomeUser} />
                <AppStack.Screen name="NewUser" component={NewUser} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}