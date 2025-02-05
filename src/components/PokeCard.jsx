import { useEffect, useState } from "react"
import { getFullPokedexNumber, getPokedexNumber } from "../utils"
import TypeCard from "./TypeCard"

export default function PokeCard(props) {
    const { selectedPokemon } = props

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const {name, height, abilities, stats, types, sprites} = data || {}

    
    useEffect(() => { 
        // if loading, exit loop or if cache doesn't exist
        if(loading || !localStorage) {
            return
        }

        // check if the selected pokemon information is in the cache
        // 1. define the cache
        let cache = {}

        if(localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }
        // 2. check if the selected pokemon is in the cache
        if(selectedPokemon in cache) {
            //read from cache
            setData(cache[selectedPokemon])
            return
        }

        // if we fetch from the api, make sure to save it in the cache for next time

        async function fetchPokemonData() {
            setLoading(true)
            try {
                const baseURL = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                const finalURL = baseURL + suffix
                const res = await fetch(finalURL)
                const pokemonData = await res.json()
                setData(pokemonData)

                console.log(pokemonData)

                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemonData()

    },[selectedPokemon])

    if(loading || !data) {
        return(
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
            </div>
            <div>
                {types.map((typeObj, typeIndex) => {
                    return (
                        <TypeCard key={typeIndex} type={typeObj?.type?.name}/>
                    )
                })}
            </div>
        </div>
    )
}