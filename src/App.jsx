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
import Favorite from "./Favorite";

const localStorageKey = "favorite_pokemon"

function ProfilePage() {
  let { pokemonIndex } = useParams()
}

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
  
  const updateFavoritePokemons = (name) =>{
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if(isFavorite >=0){
        updated.splice(isFavorite, 1);
    }else{
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
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/detail/:id" element={<PokemonDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;