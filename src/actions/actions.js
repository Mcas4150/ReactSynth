import {
  CHANGE_DIAL,
  CHANGE_WAVEFORM,
  CHANGE_FILTER_TYPE,
  SAW_START,
  TRIGGER_MASTER,
  TRIGGER_ATTACK,
  TRIGGER_RELEASE
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

export const sawStart = note => {
  return {
    type: SAW_START,
    payload: note
  };
};

export const triggerMaster = note => {
  return {
    type: TRIGGER_MASTER,
    payload: note
  };
};

export const triggerAttack = note => {
  return {
    type: TRIGGER_ATTACK,
    payload: note
  };
};

export const triggerRelease = () => {
  return {
    type: TRIGGER_ATTACK,
    payload: {}
  };
};
