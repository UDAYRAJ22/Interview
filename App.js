import React from 'react';
import {Text, View, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false, animation:'slide_from_right', orientation:'portrait',}}>
      <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
