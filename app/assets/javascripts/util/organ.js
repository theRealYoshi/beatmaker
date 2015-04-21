var TONES = {
  C3: {name: "C3", freq: 130.81},
  D3: {name: "D3", freq: 146.83},
  E3: {name: "E3", freq: 164.81},
  F3: {name: "F3", freq: 174.61},
  G3: {name: "G3", freq: 196.00},
  A3: {name: "A3", freq: 220.00},
  B3: {name: "B3", freq: 246.94},
  C4: {name: "C4", freq: 261.63},
};

(function(root){
  var createNotes = function(){
    var notes = {};
    for(var toneName in TONES){
      var tone = TONES[toneName];
      notes[tone.name] = new Note(tone.freq);
    }
    return notes;
  };

  var Organ = root.Organ = function(){
    this.notes = createNotes();
  };

  Organ.prototype = {
    play: function(tone){
      this.notes[tone].start();
    },
    release: function(tone){
      this.notes[tone].stop();
    }
  };
})(this);
