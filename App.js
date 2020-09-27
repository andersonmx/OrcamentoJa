import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#112039" />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } options={ {headerShown: false} } />
        <Stack.Screen name="Cadastro" component={ Cadastro } options={{ title: 'Cadastro', headerStyle: { backgroundColor: '#FE5530'}, headerTintColor: '#fff' }} />
        <Stack.Screen name="Home" component={ Home } options={{ title: 'Orçamento Já', headerStyle: { backgroundColor: '#FE5530'}, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}