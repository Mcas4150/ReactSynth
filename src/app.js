import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Juno106Container from "./containers/Juno106Container/Juno106Container";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Juno106Container />
        </Provider>
      </div>
    );
  }
}
