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
        />
        <SettingSlider
          name={"filterQ"}
          displayName={"RES"}
          parentName={this.props.name}
          min={0}
          max={20}
        />
      </div>
    );
  }
}
