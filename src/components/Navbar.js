import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokemons</Link>
        </li>
        <li>
          <Link to="/abilities">Abilities</Link>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  textDecoration: "none",
  listStyle: "none",
  justifyContent: "center"
};
