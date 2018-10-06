import React, { Component } from "react";
import "./Envelope.css";
import SettingSlider from "./slider";

export default class Envelope extends Component {
  render() {
    return (
      <React.Fragment>
        {/* {/* <input type="range" /> */}
        <SettingSlider
          name={"envelopeAttack"}
          displayName={"A"}
          parentName={this.props.name}
          min={0}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"Decay"}
          displayName={"D"}
          parentName={this.props.name}
          min={0}
          max={1}
          step={0.1}
        />
      </React.Fragment>
    );
  }
}
