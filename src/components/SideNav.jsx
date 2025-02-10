import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

export default function SideNav(props) {
    
    const { selectedPokemon, setSelectedPokemon } = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        // if full pokemon number includes the current search value, return true
        if((getFullPokedexNumber(eleIndex)).includes(searchValue)) { 
            return true
        }
        // if the pokemon name includes the current search value, return true
        if(ele.toLowerCase().includes(searchValue)) {
            return true
        }

        // otherwise, exclude value from the array
        return false
    })
    
    return (
        <nav className="w-64 h-screen overflow-y-auto bg-gray-800 text-white flex flex-col p-4">
            {/* Header */}
            <div className="flex justify-center mb-4">
                <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
                    PokeDex
                </h1>
            </div>

            <div className="flex justify-center mb-4">
                <input 
                type="text" 
                value={searchValue}
                onChange={((e) => {
                    setSearchValue(e.target.value)
                })}
                className="bg-gray-700 rounded-md border-2 border-indigo-400"
                placeholder="E.g. 001 or Charmander"/>
            </div>
            
            {/* Scrollable List */}
            <div className="flex flex-col">
                {filteredPokemon.map((pokemon, pokemonIndex) => {
                    const truePokeDexNumber = first151Pokemon.indexOf(pokemon)
                    
                    return (
                        <button 
                        key={pokemonIndex} 
                        className="flex justify-start items-center py-2 px-4 mb-2 rounded-lg bg-gray-500 hover:bg-gray-700 cursor-pointer duration-300 ease-in"
                        onClick={() => {
                            setSelectedPokemon(truePokeDexNumber)
                        }}>

                            <p className="mr-2">{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
                            <p>{pokemon}</p>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
