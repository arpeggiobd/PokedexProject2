import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Pokedex from './components/PokeDex'
import { PokemonApi } from './PokemonApi'
import { getPokemonData } from './getPokemonData'


function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await PokemonApi();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = Promise.all(promises)
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [pokemons])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons.results} loading={loading}/>
    </div>
  )
}

export default App
