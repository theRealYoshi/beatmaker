(function (root) {
  var ctx = new (window.AudioContext || window.webkitAudioContext)();

  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  var Note = root.Note = function (mp3) {
    this.mp3 = new Audio('/assets/' + mp3 + '.mp3');
  };

  Note.prototype = {
    start: function () {
      // can't explain 0.3, it is a reasonable value
      this.mp3.play();
      this.mp3.loop = true;
    },

    stop: function () {
      this.mp3.pause();
      this.mp3.currentTime = 0;
      // this.gainNode.gain.value = 0;
    }
  };
})(this);
