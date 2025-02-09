import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"

import { useState } from 'react'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)

  return(
    <div className="flex h-screen bg-gray-300">
      <Header />
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon}/>
      <div className="flex flex-grow flex-col justify-start items-center overflow-y-auto h-full">
        <PokeCard selectedPokemon={selectedPokemon}/>
      </div>
    </div>
  )
}

export default App