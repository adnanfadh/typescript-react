export interface PokemonList {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface Pokemon {
    id: number;
    name: string;
    stats: {
        base_stats: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        }
    }
}

export const GetPokemonList = async (): Promise<PokemonList> => {
    const ListResp = await fetch("https://pokeapi.co/api/v2/pokemon/")
    return await ListResp.json();
}

export const GetPokemon = async (url: string): Promise<Pokemon> => {
    const dataResp = await fetch(url)
    return await dataResp.json()
}



// Making ouw Promise
export const GetFirstPokemon = async (): Promise<Pokemon> =>
    new Promise( async (resolve, reject) => {
        try {
            console.log("Getting the list");
            const List = await GetPokemonList();
            resolve( await GetPokemon(List.results[0].url));
        } catch (error) {
            reject(error);
        }
    });
    