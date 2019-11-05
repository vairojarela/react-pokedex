import React from "react";
import { Link } from "react-router-dom";
import helpers from "../helpers/Helpers";

function PokeCard(props) {
  return (
    <>
      <article style={cardStyle} id={props.pokemon.id}>
        <Link style={linkStyle} to={`/pokemons/${props.pokemon.id}`}>
          <img
            src={props.pokemon.sprites.front_default}
            alt={props.pokemon.name}
          />
          <h3>{helpers.capitalize(props.pokemon.name)}</h3>
        </Link>
      </article>
    </>
  );
}

const cardStyle = {
  flex: "1",
  padding: "1%"
};

const linkStyle = {
  textDecoration: "none",
  color: "#333"
};

export default PokeCard;
