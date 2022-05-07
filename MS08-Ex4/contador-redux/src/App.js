import './App.css';
import { connect } from 'react-redux'
import { decrementarContador, incrementarContador } from './actions/contador';

function App({ contador, incrementar, decrementar }) {
  return (
    <>
      <div className="App">Contador: {contador}</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
}

const mapStateToProps = state => ({
  contador: state.contadorReducer.contador,
});

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementarContador()),
  decrementar: () => dispatch(decrementarContador()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);