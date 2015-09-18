function Track(attrs){
  var defaults = {
    name: "",
    roll: []
  };

  this.attributes = $.extend(defaults, attrs || {});
}

Track.prototype = {
  addNotes: function(notes){
    var timeSlice = {time: this._timeDelta()};
    if(notes.length > 0){
      //there are actually some keys held down
      timeSlice.notes = notes;
    }
    this.attributes.roll.push(timeSlice);
  },

  startRecording: function(){
    this.attributes.roll = [];
    this.start = Date.now();
  },

  _timeDelta: function(){
    return Date.now() - this.start;
  },

  completeRecording: function(){
    //add an empty time slice to indicate the end
    this.addNotes([]);
  },

  blank: function(){
    return this.attributes.roll.length === 0;
  },

  play: function(){
    var currentNote = 0,
        playBackStartTime = Date.now(),
        roll = this.attributes.roll,
        delta;

    var id = setInterval(function(){
      if (currentNote < roll.length) {
        //if there are still notes to be played
        delta = Date.now() - playBackStartTime;
        if(delta >= roll[currentNote].time){
          //if we are at a timeslice with a note
          //play it and move to the next one

          //because the notes might not be set, thanks rails!
          var notes = roll[currentNote].notes;
          if(typeof notes === "undefined"){
            notes = [];
          }
          KeyActions.groupUpdate(notes);
          currentNote++;
        }
      } else {
        clearInterval(id);
      }
    }, 1);
  },

  set: function(attr, val){
    this.attributes[attr] = val;
  },

  get: function(attr){
    return this.attributes[attr];
  },

  save: function(){
    if (this.blank()) {
      throw "track can't be blank!";
    }  else if (this.attributes.name === "") {
      throw "name can't be blank!";
    } else {
      TrackActions.createTrack(this.attributes);
    }
  }
};
