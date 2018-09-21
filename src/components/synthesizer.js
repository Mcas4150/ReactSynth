import React, { Component } from "react";
import Tone from "tone";
// import Envelopes from "./envelopes";

export default class Synthesizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attack: 0.03,
      decay: 0.1,
      sustain: 0.1,
      release: 0.9,
      playing: false,
      frequency: "C4"
    };

    this.envelope = new Tone.AmplitudeEnvelope({
      attack: this.state.attack,
      decay: this.state.decay,
      sustain: this.state.sustain,
      release: this.state.release
    }).toMaster();

    this.tone = new Tone.Oscillator({
      frequency: this.state.frequency,
      type: "sine",
      volume: -6
    })
      .connect(this.envelope)
      .start();

    this.handleNote = this.handleNote.bind(this);
    this.startNote = this.startNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDecay = this.handleDecay.bind(this);
    this.handleSustain = this.handleSustain.bind(this);
    this.handleRelease = this.handleRelease.bind(this);

    // this.handleRelease = this.handleRelease.bind(this);

    // const synth = new Tone.Synth().toMaster();
  }

  handleAttack(e) {
    this.envelope.attack = e.target.value;
    this.setState({ attack: e.target.value });
  }

  handleDecay(e) {
    this.envelope.decay = e.target.value;
    this.setState({ decay: e.target.value });
  }
  handleSustain(e) {
    this.envelope.sustain = e.target.value;
    this.setState({ sustain: e.target.value });
  }
  handleRelease(e) {
    this.envelope.release = e.target.value;
    this.setState({ release: e.target.value });
  }

  handleNote(e) {
    // this.tone.frequency = e.target.value;
    this.setState({ frequency: e.target.value });
  }

  startNote(e) {
    // this.tone.frequency = e.target.value;
    // this.setState({ frequency: e.target.value });
    this.envelope.triggerAttack();
  }

  stopNote() {
    this.envelope.triggerRelease();
  }

  render() {
    return (
      <div>
        <button
          onMouseDown={this.startNote}
          onMouseUp={this.stopNote}
          onClick={this.handleNote}
          value="C4"
        >
          C4
        </button>
        <button
          onMouseDown={this.startNote}
          onMouseUp={this.stopNote}
          onClick={this.handleNote}
          value="D4"
        >
          D4
        </button>
        <button
          onMouseDown={this.startNote}
          onMouseUp={this.stopNote}
          onClick={this.handleNote}
          value="E4"
        >
          E4
        </button>
        <h3>Attack</h3>
        <input
          type="range"
          min="0.1"
          max="1"
          value={this.state.attack}
          onChange={this.handleAttack}
          class="slider"
          id="Attack"
          step="0.1"
        />
        <h3>Decay</h3>
        <input
          type="range"
          min="0.1"
          max="1"
          value={this.state.decay}
          onChange={this.handleDecay}
          class="slider"
          id="Decay"
          step="0.1"
        />
        <h3>Sustain</h3>
        <input
          type="range"
          min="0.1"
          max="1"
          value={this.state.sustain}
          onChange={this.handleSustain}
          class="slider"
          id="Sustain"
          step="0.1"
        />
        <h3>Release</h3>
        <input
          type="range"
          min="0.1"
          max="1"
          value={this.state.release}
          onChange={this.handleRelease}
          class="slider"
          id="Release"
          step="0.1"
        />
      </div>
    );
  }
}
