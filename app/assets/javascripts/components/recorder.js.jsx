var Recorder = React.createClass({
  getInitialState: function(){
    return { recording: false, track: new Track() };
  },
  recordClick: function(e){
    if(this.state.recording){
      this.state.track.completeRecording();
      this.setState({recording: false});
    } else {
      this.setState({recording: true});
      this.state.track.startRecording();
    }
  },
  saveTrack: function(e){
    // try {
    this.state.track.set('name', prompt("please enter name"));
    this.state.track.save();
    // } catch (e){
      // debugger
    // }
    // if(!this.state.track.blank()){
    // }
  },
  playClick: function(e){
    if(!this.state.track.blank()){
      this.state.track.play();
    }
  },
  _keysChanged: function(){
    if (this.state.recording){
      this.state.track.addNotes(KeyStore.all());
    }
  },
  componentDidMount: function(){
    KeyStore.addChangeListener(this._keysChanged);
  },
  render: function() {
    var recordingMessage = this.state.recording ? "stop recording" : "start recording";
    var hasTrack = this.state.track.blank(),
        playClass = "play-button" + hasTrack ? "" : " disabled",
        trackSavingElements = "";

    if(!this.state.track.blank() && !this.state.recording){
      recordingMessage = "record over";
      trackSavingElements = (
        <div onClick={this.saveTrack} className="control">
          save track
        </div>
      );
    }
    return (
        <div className="controls">
          <h3>Recorder</h3>
          <div onClick={this.recordClick} className="record-button">
            { recordingMessage }
          </div>
          { trackSavingElements }
          <div onClick={this.playClick} className={playClass}>
            play
          </div>
        </div>
    );
  }
});
