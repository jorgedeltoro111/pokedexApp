import { SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonApi } from '../api/pokemon';
import { getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log('pokemons ----> ', pokemons);
  useEffect(()=>{
    (async ()=>{
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try{
      const response = await getPokemonApi();

      const pokemonsArray = [];

      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch(error){
      console.error(error);
    }
  }
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}