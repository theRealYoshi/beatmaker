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
          <div className="github-link-container">
            <h3><a className="github" href="http://www.github.com/therealyoshi">Github</a></h3>
            <h3><a className="github" href="https://www.linkedin.com/in/yoshihiroluk">Linkedin</a></h3>
          </div>
        </div>
      </div>
   );
  },

  _onChange: function () {
    this.setState({notes: KeyStore.all()});
  }
});
