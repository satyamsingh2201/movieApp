import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from '../screens/moviesList';
import MovieDetailsScreen from '../screens/movieDetails';
import NetworkStatus from '../common/NetworkStatus.js';

const Stack = createStackNavigator();

export default function AuthorisedStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="movieList" screenOptions={headerShown = false}>
        <Stack.Screen name="movieList" component={MovieListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="movieDetail" component={MovieDetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <NetworkStatus/>
    </NavigationContainer>
  );
};
