import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const pokedexLogo =
    'https://falberthen.github.io/assets/img/posts/2022-02-12-pokedex/pokedex-logo.png';
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={pokedexLogo} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;