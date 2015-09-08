var Effect = require('./Effect');
var numberInRangeType = require('./types/numberInRange');

module.exports = Effect.extend({

  type: 'delay',

  props: {
    // time: ['inclusivePositiveNumber', true, 1],
    // wet: ['inclusivePositiveNumber', true, 30],
    // dry: ['inclusivePositiveNumber', true, 100],
    // decay: ['inclusivePositiveNumber', true, 3],
    // cutoff: ['frequency', true, 1000],
    // filter: {
    //   type: 'string',
    //   default: 'highpass',
    //   values: ['highpass', 'lowpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass']
    // },
    // reverse: ['boolean', true, false]
  },

  dataTypes: {
    // inclusivePositiveNumber: numberInRangeType('inclusivePositiveNumber', 0, Infinity),
    // frequency: numberInRangeType('frequency', 20, 22050)
  },

  // createNode: function () {
  //   return reverb(this.context);
  // },

  configureNode: function () {
    // this.node.time = this.time;
    // this.node.wet.value = this.wet / 100;
    // this.node.dry.value = this.dry / 100;
    // this.node.filterType = this.filter;
    // this.node.cutoff.value = this.cutoff;
    // this.node.decay = this.decay;
    // this.node.reverse = this.reverse;
  }
});