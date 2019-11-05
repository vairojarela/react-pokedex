import React from "react";
import { Link } from "react-router-dom";
import helpers from "../helpers/Helpers";

function AbilityCard(props) {
  return (
    <>
      <article style={cardStyle} id={props.ability.id}>
        <Link style={linkStyle} to={`/abilities/${props.ability.id}`}>
          <h3>{helpers.capitalize(props.ability.name)}</h3>
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

export default AbilityCard;
