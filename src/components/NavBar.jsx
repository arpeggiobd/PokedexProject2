import React from "react";

function NavBar () {
    const pokedexLogo = 'https://falberthen.github.io/assets/img/posts/2022-02-12-pokedex/pokedex-logo.png'
    return (
        <nav>
            <div>
                <img alt ='pokedex-logo' src ={pokedexLogo} className="navbar-img" />
            </div>
            <div>❤</div>
        </nav>
    )
}

export default NavBar