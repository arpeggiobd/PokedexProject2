import React from "react";
import Pokemon from "./Pokemon";

function Pokedex(props) {
    const { pokemons, loading } = props
    console.log("pokemons", pokemons)

    return (
        <div >
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            {loading ? 
            (<div>Fetching Pokemon Data</div> 
            ) : (
            <div className="pokedex-grid">
                {pokemons && pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} pokemon={pokemon}/>
                    )
                })}
            </div>)}
        </div>
    )
}

export default Pokedex