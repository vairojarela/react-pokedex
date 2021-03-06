import React, { Component } from "react";
import pokeService from "../services/poke-api";
import helpers from "../helpers/Helpers";

export default class PokemonDetails extends Component {
  state = {
    pokemon: null
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await pokeService.getOnePokemon(id);
    this.setState({
      pokemon: response.data,
      id: id
    });
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <button onClick={this.goToPreviousPage}>Back</button>
        <h3>Pokemon Details</h3>
        <section>
          {this.state.pokemon !== null ? (
            <article key={this.state.id}>
              <h1>{helpers.capitalize(this.state.pokemon.name)}</h1>
            </article>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </>
    );
  }
}
