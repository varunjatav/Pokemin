"use client";
import React, { useState } from "react";
import Button from "./Button";
import Cross from "./Cross";

const SearchBar = ({ pokemonList, setPokemonList , fetchPokemon }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
 const emptyInput = () => {
  setSearchValue('');
  fetchPokemon();
 }

  return (
    <div className="py-2 px-2.5 mb-2 flex items-center justify-center fixed w-full z-10 bg-sky-100">
      <div className="flex items-center justify-center gap-1.5">
        <img
          src="https://pngimg.com/d/pokeball_PNG7.png"
          alt="pokemon-ball"
          height={"30px"}
          width={"30px"}
        />
        <h1 className="text-2xl font-bold italic">Pokemon</h1>
      </div>
      <div className="flex items-center justify-center gap-1 w-[250px] m-auto border-1 border-black px-1.5 py-0.5 rounded-lg">
        <Button
          searchValue={searchValue}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
        <input
          type="text"
          placeholder="Search Your Pokemon"
          className=" focus:outline-none"
          onChange={handleChange}
          value={searchValue}
        />

      {
        searchValue && <Cross emptyInput={emptyInput}/>
      }
      </div>
    </div>
  );
};

export default SearchBar;
