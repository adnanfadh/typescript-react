import { useState, useEffect } from "react";
import PromisePool from "@supercharge/promise-pool";
import { GetPokemon, GetPokemonList, Pokemon } from "./GetPokemon"

const App: React.FC = () =>{
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    useEffect(() => {
        async function getData() {
            const list = await GetPokemonList();
    
            const { results } = await PromisePool
            .withConcurrency(2)
            .for(list.results)
            .process( async data => {
                return await GetPokemon(data.url)
            })
            setPokemon(results)
        }
        getData();
    }, [])

return <div>
    <ul>
        {pokemon.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
        ))}
    </ul>
</div>
}
export default App