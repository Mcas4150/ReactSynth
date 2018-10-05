import React, { Component } from "react";
import "./Juno106Container.css";
import MainPanelContainer from "../MainPanelContainer/MainPanelContainer";
import KeyboardContainer from "../KeyboardContainer/KeyboardContainer";

export default class Juno106Container extends Component {
  render() {
    return (
      <div className="juno106">
        <MainPanelContainer />
        <KeyboardContainer />
      </div>
    );
  }
}
