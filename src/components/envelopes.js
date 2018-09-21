// import React, { Component } from "react";
// import Slider from "react-rangeslider";

// export default class Envelopes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       attack: this.props.attack,
//       decay: this.props.decay,
//       sustain: this.props.sustain,
//       release: this.props.release /** Start value **/
//     };
//   }

//   handleAttack = value => {
//     this.setState({
//       attack: value
//     });

//     this.props.onAttackChange(value);
//   };

//   handleDecay = value => {
//     this.setState({
//       decay: value
//     });

//     this.props.onDecayChange(value);
//   };

//   handleSustain = value => {
//     this.setState({
//       sustain: value
//     });

//     this.props.onSustainChange(value);
//   };

//   handleRelease = value => {
//     this.setState({
//       release: value
//     });

//     this.props.onReleaseChange(value);
//   };

//   render() {
//     return (
//       <div className="synth__envelopes">
//         <h3>Attack</h3>
//         <input
//           type="range"
//           min="0.1"
//           max="1"
//           value={this.state.attack}
//           onChange={this.handleAttack}
//           class="slider"
//           id="Attack"
//           step="0.1"
//         />
//         <h3>Decay</h3>
//         <input
//           type="range"
//           min="0.1"
//           max="1"
//           value={this.state.decay}
//           onChange={this.handleDecay}
//           class="slider"
//           id="Decay"
//           step="0.1"
//         />
//         <h3>Sustain</h3>
//         <input
//           type="range"
//           min="0.1"
//           max="1"
//           value={this.state.sustain}
//           onChange={this.handleSustain}
//           class="slider"
//           id="Sustain"
//           step="0.1"
//         />
//         <h3>Release</h3>
//         <input
//           type="range"
//           min="0.1"
//           max="1"
//           value={this.state.release}
//           onChange={this.handleRelease}
//           class="slider"
//           id="Release"
//           step="0.01"
//         />
//       </div>
//     );
//   }
// }
