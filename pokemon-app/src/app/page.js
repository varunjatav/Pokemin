"use client";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemonList(detailedPokemon);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <>
      <SearchBar pokemonList={pokemonList} setPokemonList={setPokemonList} fetchPokemon={fetchPokemon} />
      <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList} />
    </>
  );
}
