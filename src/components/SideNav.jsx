import { first151Pokemon, getFullPokedexNumber } from "../utils"

export function SideNav() {
    return (
        <nav>
            {first151Pokemon.map((pokemon, pokemonIndex) => {
                return (
                    <button className={''}>
                        <p>{getFullPokedexNumber(pokemonIndex)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}