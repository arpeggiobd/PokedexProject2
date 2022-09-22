import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

function Pokedex(props) {
    const { pokemons, loading } = props
    console.log("pokemons", pokemons)

    return (
        <div >
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
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