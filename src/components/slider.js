import React, { Component } from "react";
import { connect } from "react-redux";
import { changeDial } from "../actions/actions";
import { get } from "dot-prop-immutable";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css";

class SettingSlider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.minValue = this.props.min === undefined ? 0 : this.props.min;
    this.maxValue = this.props.max === undefined ? 100 : this.props.max;
  }

  get dialValue() {
    return this.props.dialValue;
  }

  get idName() {
    return `${this.props.parentName}-${this.props.name}`;
  }

  handleChange(newValue) {
    this.props.changeDial({
      name: this.props.name,
      dialValue: newValue,
      parentName: this.props.parentName
    });
  }

  render() {
    return (
      <div id={this.idName} className="dial">
        <Slider
          vertical={true}
          value={this.dialValue}
          onChange={this.handleChange}
          min={this.minValue}
          max={this.maxValue}
          step={this.props.step}
        />
        <label className="dial-name">{this.props.displayName}</label>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const value = get(state, `${ownProps.parentName}.${ownProps.name}`);
  return { dialValue: value === undefined ? 0 : value };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDial: dial => dispatch(changeDial(dial))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingSlider);
