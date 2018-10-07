import React, { Component } from "react";
import "./Envelope.css";
import SettingSlider from "./slider";

export default class Envelope extends Component {
  render() {
    return (
      <div className="env-grid">
        {/* {/* <input type="range" /> */}
        <SettingSlider
          name={"envelopeAttack"}
          displayName={"A"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeDecay"}
          displayName={"D"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeSustain"}
          displayName={"S"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeRelease"}
          displayName={"R"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
      </div>
    );
  }
}
