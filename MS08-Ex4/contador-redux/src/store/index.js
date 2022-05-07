import { createStore, combineReducers } from "redux";
import contadorReducer from "../reducers/contador";

const reducers = combineReducers({ contadorReducer });

const store = createStore(reducers);

export default store;