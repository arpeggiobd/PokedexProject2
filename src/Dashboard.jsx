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


const favoritesKey = "f"

function Dashboard() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await PokemonApi(24, 24 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };


  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      {notFound ? (
        <div class-name="not-found-text">Use Exact Name</div>
      ) :
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
        )}
    </div>
  );
}

export default Dashboard;