import React from "react";
import { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

function NavBar () {
    const {favoritePokemons} = useContext(FavoriteContext)
    const pokedexLogo = 'https://falberthen.github.io/assets/img/posts/2022-02-12-pokedex/pokedex-logo.png'
    
    return (
        <nav>
            <div>
                <img alt ='pokedex-logo' src ={pokedexLogo} className="navbar-img" />
            </div>
            <div>{favoritePokemons.length}❤</div>
        </nav>
    )
}

export default NavBar