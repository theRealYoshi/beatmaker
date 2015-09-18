var Recorder = React.createClass({
  getInitialState: function () {
    return { recording: false, track: new Track() };
  },

  recordClick: function (e) {
    if (this.state.recording) {
      this.state.track.completeRecording();
      this.setState({ recording: false });
    } else {
      this.setState({ recording: true });
      this.state.track.startRecording();
    }
  },

  saveTrack: function (e) {
    this.state.track.set('name', prompt("please enter name"));
    this.state.track.save();
  },

  playClick: function (e) {
    if(!this.isTrackNew()){
      this.state.track.play();
    }
  },

  _keysChanged: function () {
    if (this.state.recording){
      this.state.track.addNotes(KeyStore.all());
    }
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._keysChanged);
  },

  recordingMessage: function () {
    if (this.isRecording()) {
      return "stop recording";
    } else if (this.isDoneRecording()) {
      return "record over";
    } else {
      return "start recording";
    }
  },

  isRecording: function () {
    return this.state.recording;
  },

  isDoneRecording: function () {
    return !this.isTrackNew() && !this.state.recording;
  },

  isTrackNew: function () {
    return this.state.track.blank();
  },

  playClass: function () {
    return "play-button" + this.isTrackNew() ? "" : " disabled";
  },

  trackSavingElements: function () {
    if (this.isDoneRecording()) {
      return (
        <div onClick={this.saveTrack} className="control">
          save track
        </div>
      );
    }
  },

  render: function () {
    var hasTrack = this.isTrackNew();

    return (
      <div className="controls">
        <h3>Recorder</h3>
        <div onClick={this.recordClick} className="record-button">
          { this.recordingMessage() }
        </div>
        { this.trackSavingElements() }
        <div onClick={this.playClick} className={this.playClass()}>
          play
        </div>
      </div>
    );
  }
});
