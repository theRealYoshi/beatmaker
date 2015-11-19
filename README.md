# Beatmaker

[Beatmaker][Beatmaker] - Create and record house beats and rhythms

[Beatmaker]: http://www.housebeatmaker.co/

## Key Features

- Play pre-recorded beats
  - Event listeners listen to "keypress" events indicating whether an mp3 file
    should be played or stopped
    - Play your beats:
      - ![play_beat]
      - ![image_search]
- Record a track
  - A timeroll is initiated once the "Record" button is pressed. If any keypress
    events occur, the note associated with the keypress event and the timeslice
    of the keypress is stored in an array
    - Record a track:
      - ![record_beat]
  - ```javascript
      addNotes: function (notes) {
        var timeSlice = { time: this._timeDelta() };
        if (notes.length > 0) {
          timeSlice.notes = notes;
        }
        this.attributes.roll.push(timeSlice);
      }
    ```
- Play a recorded track on the jukebox
  - setInterval is used to ensure notes are played the appropriate instance. The
  track's timeroll is iterated. If the current interval contains the a note, the
  note is played. If not that interval is cleared from the array until the array
  is empty.
  - ```javascript
      this.interval = setInterval(function () {
        // if there are still notes to be played
        if (currentNote < roll.length) {
          delta = Date.now() - playBackStartTime;

          // if we are at a timeslice with a note, play it and move forward
          if (delta >= roll[currentNote].time) {
            var notes = roll[currentNote].notes || [];
            KeyActions.groupUpdate(notes);
            currentNote++;
          }
        } else {
          clearInterval(this.interval);
          delete this.interval;
        }
      }.bind(this), 1);
  ```
[image_search]: https://cloud.githubusercontent.com/assets/1275250/10827123/725f757e-7e2a-11e5-8309-cb16072398b4.gif
[play_beat]: https://cloud.githubusercontent.com/assets/1275250/11281655/5263443a-8eb0-11e5-89d3-dfa1ade0e2c5.gif
[record_beat]: https://cloud.githubusercontent.com/assets/1275250/11281978/e225bc5a-8eb1-11e5-9b84-76269d27a3c1.gif

## Future implementations

 - [ ] Upload your own beats
