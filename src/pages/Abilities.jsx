import React, { Component } from "react";
import pokeService from "../services/poke-api";
import AbilityCard from "../components/AbilityCard";

export default class Abilities extends Component {
  state = {
    next: null,
    previous: null,
    abilities: []
  };
  async componentDidMount() {
    const response = await pokeService.getAllAbilities();
    const data = response.data;
    const next = data.next;
    const previous = data.previous;
    const eachAbilities = data.results.map(async (ability, index) => {
      const fullDataPokemon = await pokeService.getOneAbility(index + 1);
      return fullDataPokemon.data;
    });
    const results = await Promise.all(eachAbilities);
    console.log(results);
    this.setState({
      next: next,
      previous: previous,
      abilities: results
    });
  }

  render() {
    const { abilities } = this.state;

    return (
      <>
        <h1>Abilities</h1>
        <section style={pokelistStyle}>
          {abilities.length > 0 ? (
            abilities.map((ability, id) => {
              return (
                <AbilityCard key={ability.id} ability={ability}></AbilityCard>
              );
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
