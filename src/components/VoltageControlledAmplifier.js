import React, { Component } from "react";

import SettingSlider from "./slider";
import "./VoltageControlledAmplifier.css";

export default class VoltageControlledAmplifier extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vca-grid">
        <SettingSlider
          name={"vcaGain"}
          displayName={"LEV"}
          parentName={this.props.name}
          min={20}
          max={20000}
          step={100}
        />
      </div>
    );
  }
}
