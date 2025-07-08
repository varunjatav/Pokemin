'use client';
import React, { useState } from "react";

const Button = ({searchValue, pokemonList, setPokemonList}) => {
  // console.log(searchValue);
  
  const handleSearchPokemon = async () => {
    if (!searchValue) return;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokemon not found");
      const data = await res.json();
      setPokemonList([data]);
    } catch (err) {
      console.error("Error fetching Pokémon:", err.message);
    }
  };
  
  return (
    <button onClick={() => handleSearchPokemon()} className="text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  );
};

export default Button;
