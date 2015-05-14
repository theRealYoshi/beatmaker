var Controls = React.createClass({
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
  playClick: function(e){
    this.state.track.play();
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
    var recordingMessage = this.state.recording ? "save" : "start recording";
    return (
        <div className="controls">
          <div onClick={this.recordClick} className="record-button">
            { recordingMessage }
          </div>
          <div onClick={this.playClick} className="play-button">
            play
          </div>
        </div>
    );
  }
});
