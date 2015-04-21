var NoteKey = React.createClass({
  render: function() {
    var className = "note-key";
    if(this.props.pressed){
      className += " pressed";
    }
    return <div className={className}>{this.props.noteName}</div>;
  }
});
