import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const pokedexLogo =
    'https://falberthen.github.io/assets/img/posts/2022-02-12-pokedex/pokedex-logo.png';
  return (
    <nav>
      <div>
        <Link>
        <img alt="pokeapi-logo" src={pokedexLogo} className="navbar-img" />
        </Link>
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;