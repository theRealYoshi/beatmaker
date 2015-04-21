var TONES = {
  C3: {name: "C3", freq: 523.25},
  D3: {name: "D3", freq: 587.33},
  E3: {name: "E3", freq: 659.25},
  F3: {name: "F3", freq: 698.46},
  G3: {name: "G3", freq: 783.99},
  A3: {name: "A3", freq: 880.00},
  B3: {name: "B3", freq: 987.77},
  C4: {name: "C4", freq: 1046.50},
};

(function(root){
  var notes = {};
  for(var toneName in TONES){
    var tone = TONES[toneName];
    notes[tone.name] = new Note(tone.freq);
  }
  var NoteBank = root.NoteBank = {
    play: function(tone){
      notes[tone].start();
    },
    release: function(tone){
      notes[tone].stop();
    },
    onChange: function(){
      var currentNotes = KeyStore.all();
      for(var noteName in notes){
        var note = notes[noteName];
        if(currentNotes.indexOf(noteName) !== -1){
          console.log("+ " + noteName);
          note.start();
        } else {
          console.log("- " + noteName);
          note.stop();
        }
      }
    }
  };
  KeyStore.addChangeListener(NoteBank.onChange.bind(Organ));
})(this);
