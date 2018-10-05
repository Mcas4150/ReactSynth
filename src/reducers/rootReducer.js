import {
  CHANGE_DIAL,
  CHANGE_WAVEFORM,
  CHANGE_FILTER_TYPE
} from "../actions/action-types";

import * as dotProp from "dot-prop-immutable";
import initialState from "./initialState";
import Tone from "tone";
import SynthEngine from "../synth/SynthEngine";

const synth = new SynthEngine(initialState);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DIAL:
      synth.updateSetting(action.payload.name, action.payload.dialValue);

      return dotProp.set(
        state,
        `${action.payload.parentName}.${action.payload.name}`,
        action.payload.dialValue
      );

    case CHANGE_WAVEFORM:
      synth.updateSetting(action.payload.name, action.payload.selectValue);

      return dotProp.set(
        state,
        `${action.payload.parentName}.${action.payload.name}`,
        action.payload.selectValue
      );

    case CHANGE_FILTER_TYPE:
      synth.updateSetting("filterType", action.payload);

      return dotProp.set(state, `filter.filterType`, action.payload);

    default:
      return state;
  }
};

export default rootReducer;
