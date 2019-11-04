import React from 'react'
import { Link } from 'react-router-dom';
import helpers from '../helpers/Helpers';

export default function PokeCard({ pokemon }) {
  return (
    <>
      <article id={pokemon.id} >
        {<Link to={`/pokemons/${pokemon.id}`}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{helpers.capitalize(pokemon.name)}</h3>
        </Link>}
      </article>
    </>
  )
}
