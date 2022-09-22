import React from "react";

const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
});

export const favoriteProvider = favoriteContext.Provider

export default FavoriteContext;