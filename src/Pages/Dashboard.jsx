import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Pokedex from "../components/Pokedex";
import { PokemonApi, getPokemonData, searchPokemon } from "../PokemonApi";
import styled from "styled-components";
import Header from "../components/Header";

const Div = styled.div`
 text-align: center;
  font-size: 1.25rem;
  padding: 20px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
@media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    display: flex;
;
  }
`;

function Dashboard() {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await PokemonApi(24, 24 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };


  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
<div>
    <Header />
    <SearchBar onSearch={onSearch} />
    {notFound ? (
            <Div className="not-found-text"><h1>Use Exact Name</h1></Div>
          ) : (
      <Pokedex
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        loading={loading}
      />
      )}
    </div>
  );
}

export default Dashboard;