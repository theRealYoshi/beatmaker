function Track(){
  this.notes = [];
}

Track.prototype = {
  addNotes: function(notes){
    this.notes.push({notes: notes, time: this.timeDelta()});
  },
  startRecording: function(){
    this.notes = [];
    this.start = Date.now();
  },
  timeDelta: function(){
    return Date.now() - this.start;
  },
  completeRecording: function(){
    this.notes.push({notes: [], time: this.timeDelta()});
  },
  play: function(){
    var currentNote = 0,
        playBackStartTime = Date.now(),
        roll = this.notes,
        delta;

    var id = setInterval(function(){
      if(currentNote < roll.length){
        //if there are still notes to be played
        delta = Date.now() - playBackStartTime;
        if(delta >= roll[currentNote].time){
          console.log("time");
          console.log(delta);
          console.log(roll[currentNote].notes);
          //if we are at a timeslice with a note
          //play it and move to the next one
          KeyActions.groupUpdate(roll[currentNote].notes);
          currentNote++;

        }
      } else {
        clearInterval(id);
      }
    }, 1);
  }
};
