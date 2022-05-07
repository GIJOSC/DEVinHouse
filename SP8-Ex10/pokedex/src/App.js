import React from 'react';
import Pokemon from './components/Pokemon';
import DATA from './assets/pokemons'
import Home from "./pages/Home";
class App extends React.Component {

  render() {

    return (
      <div>
        <h1 className="title">Pokedex</h1>

        <div className="container-pokemons">

          {DATA.map((item) => (
            <Pokemon
              key={item.id}
              name={item.name.english}
              photo={item.image}
              attack={item.base.Attack}
              defense={item.base.Defense}
              hp={item.base.HP}
              types={item.type}
            />
          ))}
        </div>
      </div>
    )
    return <Home />;
  }
}

export default App; 