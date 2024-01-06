import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import PokemonScreen from '../screen/Pokemon';
import PokedexScreen from '../screen/Pokedex';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Pokedexx' component={PokedexScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Pokemon' component={PokemonScreen} />
    </Stack.Navigator>
  )
}