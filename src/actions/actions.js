import {
  CHANGE_DIAL,
  CHANGE_WAVEFORM,
  CHANGE_FILTER_TYPE
} from "./action-types";

export const changeDial = dial => {
  return {
    type: CHANGE_DIAL,
    payload: dial
  };
};

export const changeWaveform = select => {
  return {
    type: CHANGE_WAVEFORM,
    payload: select
  };
};

export const changeFilterType = val => {
  return {
    type: CHANGE_FILTER_TYPE,
    payload: val
  };
};
