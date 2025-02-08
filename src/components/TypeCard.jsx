import { pokemonTypeColors } from "../utils"

export default function TypeCard(props) {
    const { type } = props
    
    return (
        <div className="rounded-md text-center p-1.5" style={{color: pokemonTypeColors?.[type]?.color, 
        background: pokemonTypeColors?.[type]?.background}}>
            <p>{type}</p>
        </div>
    )
}