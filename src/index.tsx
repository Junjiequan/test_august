import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { store } from "./reducer/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
