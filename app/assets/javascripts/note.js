(function(root){
  var ctx = new (window.AudioContext || window.webkitAudioContext)();

  var createOscillator = function(freq){
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function(){
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  var Note = root.Note = function(freq){
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  }

  Note.prototype = {
    start: function(){
      //MAGIC NUMBER
      this.gainNode.gain.value = 0.3;
    },
    stop: function(){
      this.gainNode.gain.value = 0;
    },
  }

  // var root = this;
  // var root = 440;
  // var defaultForm = "sine";
  // var defaultGain = 0.3;
  // var tones = {
  //   85: { "form": "sine", "gain": 0.3 },
  //   73: { "form": "square", "gain": 0.05 }
  // }
})(this);
