import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/Menu";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
