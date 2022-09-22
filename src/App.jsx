import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Pokedex from './components/PokeDex'

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar/>
      <Pokedex />
    </div>
  )
}

export default App
