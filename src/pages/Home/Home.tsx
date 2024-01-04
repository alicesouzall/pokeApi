import React, { useState } from "react";
import DynamicInput from "../../components/inputs/DynamicInput/DynamicInput";
import SearchIcon from '@mui/icons-material/Search';
import { HomeStyle } from "./HomeStyle";
import DynamicButton from "../../components/buttons/DynamicButton/DynamicButton";
import GetPokemon from "../../data/GetPokemon";
import Pokemon from "../../data/@types/Pokemon";
import PokemonCard from "../../components/cards/PokemonCard/PokemonCard";
import NotFoundCard from "../../components/cards/NotFoundCard/NotFoundCard";

const Home = () => {
    const [searchInput, setSearchInput] = useState("")
    const [pokemon, setPokemon] = useState<Pokemon | Error>()

    return (
        <HomeStyle>
            <div className="dynamic-input">
                <DynamicInput
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Pesquisar pokemon..."
                    onKeyUp={async (e) => {
                        if (e.key === "Enter") setPokemon(await GetPokemon(searchInput))
                    }}
                />
                <DynamicButton
                    label={<SearchIcon/>}
                    onClick={async () => setPokemon(await GetPokemon(searchInput))}
                    className="dynamic-button"
                />
            </div>

            {pokemon instanceof Error ?
                    <NotFoundCard objectNotFound="pokemon" className="not-found-card"/>
                : pokemon &&
                    <PokemonCard className="pokemon-card" pokemon={pokemon as Pokemon}/>
            }
        </HomeStyle>
    )
}

export default Home;
