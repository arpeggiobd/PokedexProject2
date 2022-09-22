import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Pokedex from './components/PokeDex'
import { PokemonApi } from './PokemonApi'
import { getPokemonData } from './getPokemonData'


function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorite, setFavorite] = useState([])

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

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
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
  )
}

export default App
