import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../context/favoritesContext";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size:10px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  @media (max-width: 768px) {
    margin-left: 5px;
  } 
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 768px) {
      padding: 0 6px;
  } 
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  .hidden{
  
  @media (max-width: 768px) {
    display: none;
  } 
  
  
}
.favorite{
  
  @media (max-width: 768px) {
    justify-content: space-between;
  } }
`;


const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const pokedexLogo =
        'https://falberthen.github.io/assets/img/posts/2022-02-12-pokedex/pokedex-logo.png';
    const homeLogo = 
        'https://library.kissclipart.com/20180930/owq/kissclipart-small-home-icon-clipart-computer-icons-house-deskt-07b351f234fbb78e.jpg'

    return (
        <Nav>
            <NavLink exact to="/home">
                <Logo>
                    <img alt="pokemon-logo" src={pokemonLogo} />
                </Logo>
            </NavLink>
            <NavMenu>
                <NavLink exact to="/" className="hidden">

                    <img alt="home" src={homeLogo}  />
                    <span>HOME</span>

                </NavLink>
                <NavLink exact to="/favorite" className="favorite">
                    <a>
                        <span>❤️{favoritePokemons.length} FAVORITE</span>
                    </a>
                </NavLink>


            </NavMenu>
        </Nav>
    );
};

export default Navbar;