import { first151Pokemon, getFullPokedexNumber } from "../utils"

export default function SideNav(props) {
    
    const { selectedPokemon, setSelectedPokemon } = props
    
    return (
        <nav className="w-64 h-screen overflow-y-auto bg-gray-800 text-white flex flex-col p-4">
            {/* Header */}
            <div className="flex justify-center mb-4">
                <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
                    PokeDex
                </h1>
            </div>
            
            {/* Scrollable List */}
            <div className="flex flex-col">
                {first151Pokemon.map((pokemon, pokemonIndex) => {
                    const truePokeDexNumber = first151Pokemon.indexOf(pokemon)
                    
                    return (
                        <button 
                        key={pokemonIndex} 
                        className="flex justify-start items-center py-2 px-4 mb-2 rounded-lg bg-gray-500 hover:bg-gray-700 cursor-pointer duration-300 ease-in"
                        onClick={() => {
                            setSelectedPokemon(truePokeDexNumber)
                        }}>
                            <p className="mr-2">{getFullPokedexNumber(pokemonIndex)}</p>
                            <p>{pokemon}</p>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
