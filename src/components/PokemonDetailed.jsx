import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import Dashboard from "../Dashboard";

const B2 = styled.div`
  display: flex;
`;

const B1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: black;
`;
const H3 = styled.h3`
  color: black;
  font-size: 13px;
  letter-spacing: 1.2px;
  line-height: 1.08;
  padding: 2px;
  position: relative;
  opacity: 0.7;
  margin: 3px;
`;
const Bottom = styled.div`
  background-color: white;
  border: 2px solid;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: block;
  height: auto;
`;
const Top = styled.div`
  padding-left: 12px;
  padding-right: 12px;
`;

const Img = styled.img`
  width: 30%;
  position: relative;
  display: row;
  left: 30%;
`;

const Id = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 60px;
 margin-right: 30px;
`;
const H1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 40px;
  color: white;
  margin-left: 0px;
`;
const Text = styled.div`
  margin-right: 10px;
  font: bold;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 70px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const H2 = styled.h2`
  font-size: 30px;
`;

const Name = styled.div`
  display: block;
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
`;
const Third = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
  height: auto;
`;
const Type = styled.div`
  display: flex;
`;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
`;

const Div = styled.div`
  top: 785px;
  color: white;
  margin-top: 100px;
`;


function PokemonDetailed(props) {
    const { pokemons } = props;

    return (
        <div>
            <Container className={pokemons.types && pokemons.types[0].type.name}>
                <Top>
                    <First>
                        <Link exact to="/" element={<Dashboard />}>Home
                        </Link>
                        <div>
                            {" "}
                        </div>
                    </First>
                    <Second>
                        <Name>
                            <H1>{pokemons.name}</H1>
                            <Type>
                                {pokemons.types &&
                                    pokemons.types.map((type, idx) => {
                                        return (
                                            <Text
                                                key={idx}
                                                className={type.type.name}
                                                id={type.type.name}
                                            >
                                                {type.type.name}
                                            </Text>
                                        );
                                    })}
                            </Type>
                        </Name>
                        <Id>#{pokemons.id}</Id>
                    </Second>
                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`} />
                </Top>
                <Bottom>
                    <B1>
                        <H2>Status</H2>
                    </B1>

                    {pokemons.stats &&
                        pokemons.stats.map((stat, idx) => {
                            return (
                                <ProgressBar
                                    key={idx}
                                    title={stat.stat.name}
                                    width={stat.base_stat}
                                    text={stat.base_stat}
                                />
                            );
                        })}
                </Bottom>
            </Container>
        </div>
    );
}


export default PokemonDetailed;