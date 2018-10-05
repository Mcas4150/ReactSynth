import React, { Component } from "react";
import "./MainPanelContainer.css";
import Envelope from "../../components/Envelope";

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
            <div className="vcf">VCF</div>
            <div className="vca">VCA</div>
            <div className="env">
              <Envelope />
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
