import React, { Component } from "react";
import Tone from "tone";
import "./synthesizer.css";
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
      frequency: "C5",
      delayTime: "16n",
      feedback: 0.2,
      roomSize: 0.9,
      dampening: 3000
    };

    this.freeverb = new Tone.Freeverb({
      dampening: this.state.dampening,
      roomSize: this.state.roomSize
    }).toMaster();

    this.pingPong = new Tone.PingPongDelay({
      delayTime: this.state.delayTime,
      feedback: this.state.feedback
    }).connect(this.freeverb);

    this.envelope = new Tone.AmplitudeEnvelope({
      attack: this.state.attack,
      decay: this.state.decay,
      sustain: this.state.sustain,
      release: this.state.release
    }).connect(this.pingPong);

    this.tone = new Tone.Oscillator({
      frequency: this.state.frequency,
      type: "square",
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
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleDelay = this.handleDelay.bind(this);
    this.handleRoomSize = this.handleRoomSize.bind(this);
    this.handleDampening = this.handleDampening.bind(this);

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

  handleFeedback(e) {
    this.envelope.feedback = e.target.value;
    this.setState({ feedback: e.target.value });
  }

  handleDelay(e) {
    this.envelope.delay = e.target.value;
    this.setState({ delay: e.target.value });
  }

  handleRoomSize(e) {
    this.envelope.roomSize = e.target.value;
    this.setState({ roomSize: e.target.value });
  }

  handleDampening(e) {
    this.envelope.dampening = e.target.value;
    this.setState({ dampening: e.target.value });
  }

  handleNote(e) {
    // this.tone.frequency = e.target.value;
    this.setState({ frequency: e.target.value });
  }

  startNote(e) {
    // this.tone.frequency = e.target.value;
    // this.setState({ frequency: e.target.value });
    this.setState({ frequency: e.target.value });
    this.envelope.triggerAttack();
  }

  stopNote() {
    this.envelope.triggerRelease();
  }

  render() {
    return (
      <div className="container">
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
        <div className="adsr row">
          <div className="attack col-sm-6 col-md-3">
            <h3>Attack</h3>
            <input
              type="range"
              min="0.1"
              max="1"
              value={this.state.attack}
              onChange={this.handleAttack}
              className="slider"
              id="Attack"
              step="0.1"
            />
          </div>
          <div className="decay col-sm-6 col-md-3">
            <h3>Decay</h3>
            <input
              type="range"
              min="0.1"
              max="1"
              value={this.state.decay}
              onChange={this.handleDecay}
              className="slider"
              id="Decay"
              step="0.1"
            />
          </div>
          <div className="sustain col-sm-6 col-md-3">
            <h3>Sustain</h3>
            <input
              type="range"
              min="0.1"
              max="1"
              value={this.state.sustain}
              onChange={this.handleSustain}
              className="slider"
              id="Sustain"
              step="0.1"
            />
          </div>
          <div className="release col-sm-6 col-md-3">
            <h3>Release</h3>
            <input
              type="range"
              min="0.1"
              max="1"
              value={this.state.release}
              onChange={this.handleRelease}
              className="slider"
              id="Release"
              step="0.1"
            />
          </div>
        </div>
        <div className="pingpong">
          <h3>Feedback</h3>
          <input
            type="range"
            min="0.1"
            max="1"
            value={this.state.feedback}
            onChange={this.handleFeedback}
            className="slider"
            id="Feedback"
            step="0.1"
          />
          <h3>Delay Time</h3>
          <select onChange={this.handleDelay}>
            <option value="32n">32n</option>
            <option value="16n">16n</option>
            <option value="8n">8n</option>
            <option value="4n">4n</option>
          </select>
        </div>
        <div className="reverb">
          <h3>RoomSize</h3>
          <input
            type="range"
            min="0.1"
            max="1"
            value={this.state.roomSize}
            onChange={this.handleRoomSize}
            className="slider"
            id="roomSize"
            step="0.1"
          />
          <h3>Dampening</h3>
          <input
            type="range"
            min="1"
            max="5000"
            value={this.state.dampening}
            onChange={this.handleDampening}
            className="slider"
            id="dampening"
            step="100"
          />
        </div>
      </div>
    );
  }
}
