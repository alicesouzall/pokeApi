import React from "react";
import Pokemon from "../../../data/@types/Pokemon";
import { PokemonCardStyle } from "./PokemonCardStyle";

const PokemonCard: React.FC<{pokemon: Pokemon, className: string}> = ({pokemon, className}) => {
    return (
        <PokemonCardStyle className={className}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image}/>
            <div className="infos-container">
                <label>Peso: {pokemon.weight} kg</label>
                <label>Altura: {pokemon.height}m</label>
            </div>
            <div className="abilities-container">
                <b>Habilidades:</b>
                <ul>
                    {
                        pokemon.abilities.map(a => (
                            <li>{a.ability.name}</li>
                        ))
                    }
                </ul>
            </div>
        </PokemonCardStyle>
    )
}

export default PokemonCard;
