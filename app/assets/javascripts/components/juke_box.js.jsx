var JukeBox = React.createClass({
  getInitialState: function(){
    return {tracks: TrackStore.all()};
  },

  _onChange: function(){
    this.setState({tracks: TrackStore.all()});
  },

  componentDidMount: function(){
    TrackStore.addChangeListener(this._onChange);
    TrackApiUtil.fetchTracks();
  },

  render: function(){
    return (
      <div className="jukebox">
        <h3>JUKEBOX</h3>
        {
           this.state.tracks.map(function(track){
            return <TrackPlayer key={track.get('id')} track={track}/>
          })
        }
      </div>
    );
  }
});
