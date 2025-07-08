'use client';
import React, { useEffect, useState, use } from 'react';

const PokemonDetails = ({ params }) => {
  // ✅ Unwrap the async params object using React.use()
  const { name } = use(params); // `use` is the new hook to unwrap Promises

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="my-4" />

      <div>
        <h2 className="text-xl font-semibold">Abilities:</h2>
        <ul>
          {pokemon.abilities.map((a, idx) => (
            <li key={idx}>{a.ability.name}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Types:</h2>
        <ul>
          {pokemon.types.map((t, idx) => (
            <li key={idx}>{t.type.name}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Stats:</h2>
        <ul>
          {pokemon.stats.map((s, idx) => (
            <li key={idx}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Moves:</h2>
        <ul className="max-h-[200px] overflow-y-auto">
          {pokemon.moves.map((m, idx) => (
            <li key={idx}>{m.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
