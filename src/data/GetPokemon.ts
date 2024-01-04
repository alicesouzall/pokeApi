import axios from "axios";
import Pokemon from "./@types/Pokemon";

const GetPokemon = async (name: string): Promise<Pokemon | Error> => {
    try {
        const pokemon = await axios.get(`http://localhost:3001/api/pokemons/${name}`)
        return pokemon.data
    }
    catch (e) {
        return Error((e as Error).message)
    }
}

export default GetPokemon;
