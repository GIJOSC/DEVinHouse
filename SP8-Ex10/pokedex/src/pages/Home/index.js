import React from "react";
import Pokemon from "../../components/Pokemon";
import DATA from "../../assets/pokemons";
import Header from "../../components/Header";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [], loading: false, showButton: true };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  getData = () => {
    this.setState({ showButton: false, loading: true });
    setTimeout(() => {
      this.setState({ pokemons: DATA, loading: false, showButton: false });
    }, 3000);
  };

  handleChange = (evt) => {
    const text = evt.target.value;
    console.log(text);

    const filterData = DATA.filter((pokemon) => {
      return pokemon.name.english.toLowerCase().includes(text.toLowerCase());
    });

    this.setState({ pokemons: filterData });
  };

  render() {
    console.log("render");
    return (
      <>
        <Header title="Pokedex" />

        {!this.state.showButton && !this.state.loading && (
          <input type="text" onChange={this.handleChange} />
        )}

        <div className="container-pokemons">
          {this.state.showButton && (
            <button onClick={this.getData}>Get DATA</button>
          )}

          {this.state.loading && "Loading..."}
          {!this.state.loading &&
            this.state.pokemons.map((item) => (
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
      </>
    );
  }
}

export default Home;