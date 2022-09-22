import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import FavoriteContext from "../context/favoritesContext";

function PokemonDetailed(props) {
    const { pokemons } = props;

    console.log(pokemons);
    return (
        <div>
            <div className={pokemons.types && pokemons.types[0].type.name}>
                <div className="First">
                    <div className="Name">
                        <div className="H1">{pokemons.name}</div>
                        <div className="Type">
                            {pokemons.types &&
                                pokemons.types.map((type, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className={type.type.name}
                                            id={type.type.name}
                                        >
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="id">#{pokemons.id}</div>
                </div>
                <div>
                <img src={`../images/pokedex/${pokemons.id}.png`} />
                </div>
                <div className="Bottom">
                    <div className="B1">
                        <div className="H2">Status</div>
                    </div>

                    {pokemons.stats &&
                        pokemons.stats.map((stat, idx) => {
                            return (
                                <ProgressBar
                                    key={idx}
                                    title={stat.stat.name}
                                    width={stat.base_stat}
                                    text={stat.base_stat}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default PokemonDetailed;