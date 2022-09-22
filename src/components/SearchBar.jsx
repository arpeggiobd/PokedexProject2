import React, { useState } from "react";

function Searchbar(props) {
    const [search, setSearch] = useState("")
    const { onSearch } = props

    function onChangeHandler(e) {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    function onButtonClickHandler() {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
        </div>
    )
}

export default Searchbar;