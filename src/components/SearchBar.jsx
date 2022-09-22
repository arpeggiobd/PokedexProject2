import React from "react";
import { useState } from "react";

function SearchBar () {
    const [search, setSearch] = useState("")

    function onChangeHandler(e) {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    function onButtonClickHandler() {
        console.log("pokemon: ", search)
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