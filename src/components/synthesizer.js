// import React, { Component } from "react";
// import Knob from "react-rotary-knob";
// import Tone from "tone";
// import Keyboard from "./keyboard";
// import Analyzer from "./analyzer";
// import "./synthesizer.css";
// // import Envelopes from "./envelopes";

// export default class Synthesizer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       attack: 0.03,
//       decay: 0.1,
//       sustain: 0.1,
//       release: 0.9,
//       playing: false,
//       frequency: "C3",
//       delayTime: "16n",
//       feedback: 0.2,
//       roomSize: 0.9,
//       dampening: 3000,
//       lfoRate: "4n",
//       lfoMin: 400,
//       lfoMax: 600
//     };

//     this.synthAnalyzer = new Tone.Analyser("fft").toMaster();

//     this.freeverb = new Tone.Freeverb({
//       dampening: this.state.dampening,
//       roomSize: this.state.roomSize
//     }).connect(this.synthAnalyzer);

//     this.pingPong = new Tone.PingPongDelay({
//       delayTime: this.state.delayTime,
//       feedback: this.state.feedback
//     }).connect(this.freeverb);

//     this.envelope = new Tone.AmplitudeEnvelope({
//       attack: this.state.attack,
//       decay: this.state.decay,
//       sustain: this.state.sustain,
//       release: this.state.release
//     }).connect(this.pingPong);

//     this.tone = new Tone.Oscillator({
//       frequency: this.state.frequency,
//       type: "sine",
//       volume: -6
//     })
//       .connect(this.envelope)
//       .start();

//     this.lfo = new Tone.LFO({
//       frequency: "4n",
//       min: 400,
//       max: this.state.lfoMax
//     }).connect(this.tone.frequency);

//     new Tone.Loop(_ => {
//       const canvasNames = ["synthAnalysis"];
//       const analyzers = [this.synthAnalyzer];
//       for (let i = 0; i < canvasNames.length; i++) {
//         let arr = analyzers[i].getValue();
//         let c = document.getElementById(canvasNames[i]);
//         let ctx = c.getContext("2d");
//         ctx.clearRect(0, 0, 200, 120);
//         ctx.strokeRect(0, 0, 200, 120);
//         ctx.beginPath();
//         ctx.moveTo(0, arr[0]);
//         for (let x = 1; x < arr.length; x++) {
//           ctx.lineTo(x * (1 / (arr.length - 1)) * 200, 0 - arr[x]);
//         }
//         ctx.stroke();
//       }
//     }, "32n").start(0);

//     this.startNote = this.startNote.bind(this);
//     this.stopNote = this.stopNote.bind(this);
//     this.handleAttack = this.handleAttack.bind(this);
//     this.handleDecay = this.handleDecay.bind(this);
//     this.handleSustain = this.handleSustain.bind(this);
//     this.handleRelease = this.handleRelease.bind(this);
//     this.handleFeedback = this.handleFeedback.bind(this);
//     this.handleDelay = this.handleDelay.bind(this);
//     this.handleRoomSize = this.handleRoomSize.bind(this);
//     this.handleDampening = this.handleDampening.bind(this);
//   }

//   handleAttack(e) {
//     this.envelope.attack = e.target.value;
//     this.setState({ attack: e.target.value });
//   }

//   handleDecay(e) {
//     this.envelope.decay = e.target.value;
//     this.setState({ decay: e.target.value });
//   }
//   handleSustain(e) {
//     this.envelope.sustain = e.target.value;
//     this.setState({ sustain: e.target.value });
//   }
//   handleRelease(e) {
//     this.envelope.release = e.target.value;
//     this.setState({ release: e.target.value });
//   }

//   handleFeedback(e) {
//     this.envelope.feedback = e.target.value;
//     this.setState({ feedback: e.target.value });
//   }

//   handleDelay(e) {
//     this.envelope.delay = e.target.value;
//     this.setState({ delay: e.target.value });
//   }

//   handleRoomSize(e) {
//     this.envelope.roomSize = e.target.value;
//     this.setState({ roomSize: e.target.value });
//   }

//   handleDampening(e) {
//     this.envelope.dampening = e.target.value;
//     this.setState({ dampening: e.target.value });
//   }

//   startNote(note) {
//     this.setState({ playing: true, frequency: note });
//     this.envelope.triggerAttack();
//   }

//   stopNote() {
//     this.setState({ playing: false });
//     this.envelope.triggerRelease();
//   }

//   render() {
//     return (
//       <div className="synthesizer">
//         <div className="container">
//           <div className="row">
//             <div className="envelopes col-sm-12 col-md-6">
//               <div className="row">
//                 <div className="attack col-sm-6 col-md-3">
//                   <h3>Attack</h3>
//                   {/* <Knob
//                     min={0.1}
//                     max={1}
//                     value={this.state.attack}
//                     onChange={this.handleAttack}
//                     // id="Attack"
//                     step={0.1}
//                   /> */}
//                   <input
//                     type="range"
//                     min="0.1"
//                     max="1"
//                     value={this.state.attack}
//                     onChange={this.handleAttack}
//                     className="slider"
//                     id="Attack"
//                     step="0.1"
//                   />
//                 </div>
//                 <div className="decay col-sm-6 col-md-3">
//                   <h3>Decay</h3>
//                   <input
//                     type="range"
//                     min="0.1"
//                     max="1"
//                     value={this.state.decay}
//                     onChange={this.handleDecay}
//                     className="slider"
//                     id="Decay"
//                     step="0.1"
//                   />
//                 </div>
//                 <div className="sustain col-sm-6 col-md-3">
//                   <h3>Sustain</h3>
//                   <input
//                     type="range"
//                     min="0.1"
//                     max="1"
//                     value={this.state.sustain}
//                     onChange={this.handleSustain}
//                     className="slider"
//                     id="Sustain"
//                     step="0.1"
//                   />
//                 </div>
//                 <div className="release col-sm-6 col-md-3">
//                   <h3>Release</h3>
//                   <input
//                     type="range"
//                     min="0.1"
//                     max="1"
//                     value={this.state.release}
//                     onChange={this.handleRelease}
//                     className="slider"
//                     id="Release"
//                     step="0.1"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="pingpong col-sm-12 col-md-3">
//               <h3>Feedback</h3>
//               <input
//                 type="range"
//                 min="0.1"
//                 max="1"
//                 value={this.state.feedback}
//                 onChange={this.handleFeedback}
//                 className="slider"
//                 id="Feedback"
//                 step="0.1"
//               />
//               <h3>Delay Time</h3>
//               <select onChange={this.handleDelay}>
//                 <option value="32n">32n</option>
//                 <option value="16n">16n</option>
//                 <option value="8n">8n</option>
//                 <option value="4n">4n</option>
//               </select>
//             </div>
//             <div className="reverb col-sm-12 col-md-3">
//               <h3>RoomSize</h3>
//               <input
//                 type="range"
//                 min="0.1"
//                 max="1"
//                 value={this.state.roomSize}
//                 onChange={this.handleRoomSize}
//                 className="slider"
//                 id="roomSize"
//                 step="0.1"
//               />
//               <h3>Dampening</h3>
//               <input
//                 type="range"
//                 min="1"
//                 max="5000"
//                 value={this.state.dampening}
//                 onChange={this.handleDampening}
//                 className="slider"
//                 id="dampening"
//                 step="100"
//               />
//             </div>
//           </div>
//           <Analyzer name="synthAnalysis" />
//           <Keyboard
//             onDown={this.startNote}
//             onUp={this.stopNote}
//             onKeyDown={this.startNote}
//           />
//         </div>
//       </div>
//     );
//   }
// }
