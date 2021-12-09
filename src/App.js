
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './Home';
import Login from './Login'
import Details from './Details';
import Cart from './Cart';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{}} name="Home" component={Home} />
                <Stack.Screen options={{}} name="Details" component={Details} />
                <Stack.Screen options={{}} name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;