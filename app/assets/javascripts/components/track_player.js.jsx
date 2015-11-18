var TrackPlayer = React.createClass({
  playClick: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track">
        <p className="track-name">{this.props.track.get('name')}</p>
        <button onClick={this.playClick} className="btn btn-default btn-sm">
          Play
        <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
});
