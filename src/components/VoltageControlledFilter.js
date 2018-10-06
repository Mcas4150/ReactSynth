import React, { Component } from "react";

import SettingSlider from "./slider";
import "./VoltageControlledFilter.css";

export default class VoltageControlledFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vcf-grid">
        <SettingSlider
          name={"filterCutoff"}
          displayName={"FREQ"}
          parentName={this.props.name}
          min={20}
          max={20000}
          step={100}
        />
        <SettingSlider
          name={"filterQ"}
          displayName={"RES"}
          parentName={this.props.name}
          min={0}
          max={40}
          step={1}
        />
      </div>
    );
  }
}
