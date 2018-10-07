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
          name={"vcaLevel"}
          displayName={"LEV"}
          parentName={this.props.name}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    );
  }
}
