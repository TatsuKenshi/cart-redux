import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { data } from "./data/data";
import reducer from "./reducer/reducer";

// import createStore and Provider from redux/react-redux
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

// initial store (state) object stores state props and values
const initialStore = {
  cart: data,
  totalPrice: 0,
  numberOfItems: 0,
};

// create store
const store = createStore(reducer, initialStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
