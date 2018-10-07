import React from "react";
import Tone from "tone";
import "./keyboard.css";
import { connect } from "react-redux";
import { get } from "dot-prop-immutable";
import {
  triggerMaster,
  triggerAttack,
  triggerRelease
} from "../actions/actions";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tone: ""
    // };

    this.notes = [
      "C1",
      "C#1",
      "D1",
      "D#1",
      "E1",
      "F1",
      "F#1",
      "G1",
      "G#1",
      "A1",
      "A#1",
      "B1",
      "C2",
      "C#2",
      "D2",
      "D#2",
      "E2",
      "F2",
      "F#2",
      "G2",
      "G#2",
      "A2",
      "A#2",
      "B2",
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3",
      "A3",
      "A#3",
      "B3",
      "C4",
      "C#4",
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4"
    ];

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
  }

  onKeyDown(e) {
    // let note = Tone.Frequency(e.keyCode, "midi").toNote();
    // for (let i = this.notes.length - 1; i >= 0; i--) {
    //   if (this.notes[i] === note) {
    //     this.props.onKeyDown(note);
    //   }
    // }
  }

  // getFrequency(note){
  //   this.notes,
  // }

  handleMouseDown(e) {
    this.props.triggerAttack(e.target.dataset.value);
  }

  handleMouseUp(e) {
    this.props.triggerRelease(e.target.dataset.value);
  }

  // handleMouseDown(e) {
  //   this.props.triggerMaster(e.target.dataset.value);
  // }

  handleRelease() {
    // this.props.onUp("");
  }

  render() {
    let keys = this.notes.map((key, index) => {
      if (key.indexOf("#") === -1) {
        return (
          <div
            className="keyboard__key keyboard__key--major"
            data-value={key}
            key={index}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.handleRelease}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        );
      } else {
        return (
          <div
            className="keyboard__key keyboard__key--minor"
            data-value={key}
            key={index}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.handleRelease}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        );
      }
    });

    return <div className="keyboard">{keys}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const _note = get(state, "triggerAttack.note");
  // const _note = get(state, "triggerMaster.note");
  return { note: _note === undefined ? "C3" : _note };
};

const mapDispatchToProps = dispatch => {
  return {
    triggerAttack: note => dispatch(triggerAttack(note)),
    triggerRelease: note => dispatch(triggerRelease(note))
    // triggerMaster: note => dispatch(triggerMaster(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard);
