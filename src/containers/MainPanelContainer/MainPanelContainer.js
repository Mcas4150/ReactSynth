import React, { Component } from "react";
import "./MainPanelContainer.css";
import Envelope from "../../components/Envelope";
import VoltageControlledFilter from "../../components/VoltageControlledFilter";
import VoltageControlledAmplifier from "../../components/VoltageControlledAmplifier";

export default class MainPanelContainer extends Component {
  render() {
    return (
      <div className="main-panel">
        <div className="left-panel">
          <div className="left-panel--top"> Roland</div>
          <div className="left-panel--bottom" />
        </div>
        <div className="center-panel">
          <div className="center-panel--top">
            <div className="lfo">LFO</div>
            <div className="dco">DCO</div>
            <div className="hpf">HPF</div>
            <div className="vcf">
              VCF
              <VoltageControlledFilter name={"filter"} displayName={"Filter"} />
            </div>
            <div className="vca">
              VCA
              <VoltageControlledAmplifier name={"vca"} displayName={"Vca"} />
            </div>
            <div className="env">
              ENV
              <Envelope name={"envelope"} displayName={"envelope"} />
            </div>
            <div className="chorus">CHORUS</div>
          </div>
          <div className="center-panel--bottom">Programs</div>
        </div>
        <div className="right-panel">
          <div className="right-panel--top"> JUNO-106</div>
          <div className="right-panel--bottom">
            PROGRAMMABLE POLYPHONIC SYNTHESIZER
          </div>
        </div>
      </div>
    );
  }
}
