"use client";
import React from "react";
import Button from "./Button";

const SearchBar = () => {
  return (
    <div className="pt-3.5">
      <div className="flex items-center justify-center gap-1 w-[220px] m-auto border-1 border-black px-1.5 py-0.5 rounded-lg">
      <Button />
        <input type="text" placeholder="Search Your Pokemon"   className=" focus:outline-none" />
       
      </div>
    </div>
  );
};

export default SearchBar;
