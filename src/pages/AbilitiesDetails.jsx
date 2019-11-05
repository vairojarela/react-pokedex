import React, { Component } from "react";
import pokeService from "../services/poke-api";
import helpers from "../helpers/Helpers";

export default class AbilitiesDetails extends Component {
  state = {
    ability: null
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await pokeService.getOneAbility(id);
    this.setState({
      ability: response.data,
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
        <h3>Ability Details</h3>
        <section>
          {this.state.ability !== null ? (
            <article key={this.state.id}>
              <h1>{helpers.capitalize(this.state.ability.name)}</h1>
            </article>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </>
    );
  }
}
