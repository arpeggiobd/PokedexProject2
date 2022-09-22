import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Pokedex from './components/PokeDex'
import { PokemonApi } from './PokemonApi'
import { getPokemonData } from './getPokemonData'
import { FavoriteProvider } from './context/favoritesContext'

const favoritesKey = 'f'

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favourite, setFavourite] = useState([])

  const itemsPerPage = 50

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await PokemonApi(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = Promise.all(promises)
      setPokemons(result)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  function loadFavoritePokemons() {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))
    setFavourite(pokemons)
  }

  useEffect(() =>{
    loadFavoritePokemons()
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page])

  function updateFavoritePokemons(name) {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updatedFavorites.slice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoriteIndex, JSON.stringify(updatedFavorites));
    setFavourite(updatedFavorites)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
        <div>
          <NavBar />
          <SearchBar />
          <Pokedex
            pokemons={pokemons.results}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
        </FavoriteProvider>
  )
}

export default App
