import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from '../screen/Favorite';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={FavoriteScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}