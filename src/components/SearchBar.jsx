import React from "react";
import { useState } from "react";
import { PokemonApi } from "../PokemonApi";

function SearchBar () {
    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState()

    function onChangeHandler(e) {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    function onButtonClickHandler() {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await PokemonApi(pokemon)
        setPokemon(result)
        // console.log("search: ", pokemon)
      }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-button">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Name: {pokemon.name}</div>
                    <div>Weight :{pokemon.weight}</div>
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                </div>
            ) : null}
        </div>
    )
}

export default SearchBar