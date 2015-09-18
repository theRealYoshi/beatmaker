var NoteKey = React.createClass({
  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { pressed: this.thisKeyPressed() };
  },

  render: function () {
    var className = "note-key";
    if(this.state.pressed){
      className += " pressed";
    }
    return <div className={className}>{this.props.noteName}</div>;
  },

  thisKeyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  _onChange: function () {
    var pressed = this.thisKeyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
    this.setState({ pressed: pressed });
  }
});
