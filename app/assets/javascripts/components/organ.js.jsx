var Organ = React.createClass({
  componentDidMount: function(){
    KeyStore.addChangeListener(this._onChange);
  },
  getInitialState: function(){
    return {notes: KeyStore.all()};
  },
  _onChange: function(){
    this.setState({notes: KeyStore.all()});
  },
  render: function() {
    var notes = this.state.notes;
    console.log(notes);
    return (
      <div>
        {
          Object.keys(TONES).map(function(noteName){
            var pressed = (notes.indexOf(noteName) !== -1);
            return (
                <NoteKey 
                  noteName={noteName} 
                  pressed={pressed} 
                  key={noteName}/>
            );
          })
        }
        <Controls />
      </div>
   );
  }
});
