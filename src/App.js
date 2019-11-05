import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import Abilities from "./pages/Abilities";
import AbilitiesDetails from "./pages/AbilitiesDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar title="Pokemons" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemons" exact component={PokemonList} />
        <Route path="/pokemons/:id" exact component={PokemonDetails} />
        <Route path="/abilities" exact component={Abilities} />
        <Route path="/abilities/:id" exact component={AbilitiesDetails} />
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
