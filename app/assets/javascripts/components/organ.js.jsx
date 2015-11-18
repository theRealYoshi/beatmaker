var Organ = React.createClass({
  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-2">
          <Recorder />
          <JukeBox />
        </div>
        <div className="col-md-8">
          <div className="keys group">
            <div className="keys-container">
          {
            Object.keys(TONES).map(function (noteName) {
              return (<NoteKey noteName={noteName} key={noteName}/>);
            })
          }
            </div>
          </div>
        </div>
        <div className="col-md-2">

        </div>
      </div>
   );
  },

  _onChange: function () {
    this.setState({notes: KeyStore.all()});
  }
});
