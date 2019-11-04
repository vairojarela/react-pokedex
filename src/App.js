import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PokemonList from './pages/PokemonList'
import NotFound from './pages/NotFound'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemons" exact component={PokemonList} />
        <Route path="/pokemons/:id" exact component={PokemonDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
