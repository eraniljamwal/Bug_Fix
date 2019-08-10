import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
//import HomePage from "./components/HomePage";
import {BrowserRouter} from 'react-router-dom';
//import {fetchPages} from './actions/pagesActions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//store.subscribe(() =>  console.log('store', store.getState()));
//store.dispatch(fetchPages(187));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  rootElement
);
