import React, { useEffect, useState } from "react";
import "./App.css";
import { PokemonApi, getPokemonData, searchPokemon } from "./PokemonApi";
import { FavoriteProvider } from "./context/favoritesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Favorites from './Pages/Favorite'
import Dashboard from './Pages/Dashboard'
import Header from "./components/Header";
import PokemonDetail from "./Pages/PokemonDetail";

const localStorageKey = "favorite_pokemon"

function App() {
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name)
    }
    setFavorites(updated)
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  }
  
  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemon: updateFavoritePokemons
    }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FavoriteProvider>
  );
}

export default App;