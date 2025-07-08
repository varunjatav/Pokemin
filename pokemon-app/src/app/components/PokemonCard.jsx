"use client";
import React, { useEffect, useState } from "react";

const PokemonCard = () => {
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
    <div className="p-4 flex flex-wrap justify-center">
      {pokemonList.map((pokemon) => (
    <div
      key={pokemon.id}
      className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg cursor-pointer"
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>

      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <img
          className="relative w-40"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1 capitalize">
          Type: {pokemon.types.map((t) => t.type.name).join(", ")}
        </span>

        <div className="flex justify-between items-center">
          <span className="block font-semibold text-xl capitalize">
            {pokemon.name}
          </span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            XP: {pokemon.base_experience}
          </span>
        </div>
      </div>
    </div>
  ))}
     
    
    </div>
  );
};

export default PokemonCard;
