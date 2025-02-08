import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"

import { useState } from 'react'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)

  return(
    <div className="flex h-screen bg-gray-100">
      <Header />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon}/>
      <div className="flex flex-grow justify-center items-center overflow-y-auto">
        <PokeCard selectedPokemon={selectedPokemon}/>
      </div>
    </div>
  )
}

export default App