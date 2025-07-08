"use client";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemonList}) => {
  

 
  return (
    <div className="px-8 py-8 flex flex-wrap justify-center">
      {pokemonList.map((pokemon) => ( <PokemonCard key={pokemon.id} pokemon={pokemon} id={pokemon.id} />  ))};
     
    
    </div>
  );
};

export default PokemonList;
