import React, { Component } from "react";
import "./KeyboardContainer.css";
import Keyboard from "../../components/keyboard.js";

export default class KeyboardContainer extends Component {
  render() {
    return (
      <div className="keyboard-container">
        <div className="keyboard-panel" />
        <div className="keyboard-keys">
          <Keyboard />
        </div>
      </div>
    );
  }
}
