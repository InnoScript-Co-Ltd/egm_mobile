import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import { Register } from './src/screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={navigationOptions} />
        <Stack.Screen name="Login" component={Login} options={navigationOptions} />
        <Stack.Screen name="Register" component={Register} options={navigationOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}