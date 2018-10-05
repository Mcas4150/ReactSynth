import Tone from "tone";

class SynthEngine {
  constructor(initialState) {
    this.limiter = new Tone.Limiter(-10);

    this.vcf = new Tone.Filter(10000, "lowpass");

    this.masterBus = new Tone.Gain().chain(this.vcf, this.limiter, Tone.Master);

    this.vca = new Tone.AmplitudeEnvelope(0.1, 0.2, 0.4, 0.2).toMaster();

    this.sawOsc = new Tone.Oscillator(440, "sawtooth").connect(this.vca);

    this.pulseOsc = new Tone.PulseOscillator(440, 0.4);
    this.subOsc = new Tone.Oscillator(110, "sawtooth");
    this.noiseOsc = new Tone.NoiseSynth();
    // this.oscArray = [this.sawOsc, this.pulseOsc, this.subOsc, this.noiseOsc];

    // this.polySynth = new Tone.PolySynth(5, this.oscArray);

    this.chorusNode = new Tone.Chorus(4, 2.5, 0.5);

    this.testSynth = new Tone.Synth();
    // this.sawOsc.chain(this.vcf, this.vca, this.masterBus);

    this.highpassFilterNode = new Tone.Filter(20, "highpass");

    this.testSynth.chain(
      this.highpassFilterNode,
      this.chorusNode,
      this.masterBus
    );

    // this.createOscillatorSettingCallbacks();
    // this.initInitialSettings(initialState);
  }

  triggerAttackRelease(value, freq) {
    this.testSynth.triggerAttackRelease(value, freq);
  }

  //   triggerAttackRelease(value, freq) {
  //   this.polySynth.triggerAttackRelease(value, freq);
  // }

  triggerSawStart() {
    this.sawOsc.start();
  }

  static get TOP_LEVEL_SETTINGS() {
    return ["chorus", "volume", "filterCutoff", "filterQ", "filterType"];
  }

  updateSetting(name, val) {
    if (this.constructor.TOP_LEVEL_SETTINGS.includes(name)) {
      this[name](val);
    } else {
      this[name](val);
    }
  }

  chorus(val) {
    console.log("ToneSynth.chorus", val);
    this.chorusNode.wet.value = val;
  }

  volume(val) {
    Tone.Master.volume.value = val;
  }

  filterCutoff(val) {
    this.vcf.frequency.value = val;
  }

  filterQ(val) {
    this.vcf.Q.value = val;
  }

  highpassFilterCutoff(val) {
    this.highpassFilterNode.frequency.value = val;
  }
}

export default SynthEngine;
