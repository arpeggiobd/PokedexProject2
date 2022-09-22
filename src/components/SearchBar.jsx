import React, { useState } from "react";
import styled from "styled-components";


function Searchbar(props) {
    const [search, setSearch] = useState("")
    const { onSearch } = props

    function onChangeHandler(e) {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onButtonClickHandler = async (e) => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
        </div>
    )
}

export default Searchbar;