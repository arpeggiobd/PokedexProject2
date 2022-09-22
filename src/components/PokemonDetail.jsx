import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PokemonDetailed from "./PokemonDetailed";

function PokemonDetail() {
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const searchPokemon = async (id) => {
        try {
            setLoading(false);
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            setPokemons(data);
            setLoading(true);
        } catch (error) {
            console.log("error: ", error)
        }
    };

    useEffect(() => {
        searchPokemon(id);
    }, []);

    {
        console.log(pokemons);
    }

    return (
        <div>
            <PokemonDetailed pokemons={pokemons} />
        </div>
    );
}

export default PokemonDetail