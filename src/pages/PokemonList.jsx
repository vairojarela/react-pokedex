import React, { Component } from "react";
import pokeService from "../services/poke-api";
import Pokecard from "../components/Pokecard";

class PokemonList extends Component {
  state = {
    next: null,
    previous: null,
    pokemons: []
  };

  async componentDidMount() {
    const response = await pokeService.getAllPokemons();
    const data = response.data;
    const next = data.next;
    const previous = data.previous;
    const eachPokemons = data.results.map(async (pokemon, index) => {
      const fullDataPokemon = await pokeService.getOnePokemon(index + 1);
      return fullDataPokemon.data;
    });
    const results = await Promise.all(eachPokemons);
    this.setState({
      next: next,
      previous: previous,
      pokemons: results
    });
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  };

  goToNextPage = () => {
    let { next } = this.state;
    console.log(next);
  };

  render() {
    const { pokemons } = this.state;

    return (
      <>
        <h1>Pokemons</h1>
        <section style={pokelistStyle}>
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, id) => {
              return <Pokecard key={pokemon.id} pokemon={pokemon}></Pokecard>;
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <button onClick={this.goToNextPage}>Next</button>
      </>
    );
  }
}

const pokelistStyle = {
  display: "flex",
  flexFlow: "row wrap"
};

export default PokemonList;
