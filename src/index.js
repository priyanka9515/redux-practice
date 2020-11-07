// import React from 'react'
// import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux'
// import store from './store'

// import App from './App'
// import { createStore } from 'redux'
// import reducers from './reducres'
// //  const store = createStore(reducers)
//  const store = createStore(reducers);

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
// import {Provider} from "react-redux";
import reducers from "./reducres/index";
// import {createStore} from "redux";
// import {counterReducer} from "./reducres/counterReducer";
// import {counterAction} from "./actions/counterAction"


import { Provider } from 'react-redux';
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);