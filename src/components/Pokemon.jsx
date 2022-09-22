import React from "react";

function Pokemon (props) {
const {pokemon} = props

    return (
        <div>
            {pokemon.name}
        </div>
    )

}

export default Pokemon