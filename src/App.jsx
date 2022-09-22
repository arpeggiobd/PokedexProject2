import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { PokemonApi } from "./PokemonApi";
import { getPokemonData } from "./getPokemonData";
import { FavoriteProvider } from "./context/favoritesContext";
import { searchPokemon } from "./SearchPokemon";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import Dashboard from "./Dashboard";
import PokemonDetail from "./components/PokemonDetail";


function ProfilePage() {
  let { pokemonIndex } = useParams()
}

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path=":id" element={<PokemonDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;