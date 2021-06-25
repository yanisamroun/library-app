import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#B56B45',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Ma bibliothèque" component={HomeScreen} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}