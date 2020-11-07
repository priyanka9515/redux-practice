import { combineReducers } from "redux";
import CounterReducer from "./counteReducer";
// import CustomerReducer from "./CustomerReducer";

const reducers = combineReducers({
  CounterReducer,
  //   CustomerReducer
});

export default reducers;