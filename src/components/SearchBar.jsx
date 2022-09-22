import React from "react";
import { useState } from "react";
import { PokemonApi } from "../PokemonApi";

function SearchBar(props) {
    const [search, setSearch] = useState("")
    const { onSearch } = props

    function onChangeHandler(e) {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    function onButtonClickHandler() {
        onSearch(search)
    }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-button">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar