import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="App">

      </div>
    </div>
  )
}

export default App
