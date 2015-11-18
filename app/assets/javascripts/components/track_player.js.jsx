var TrackPlayer = React.createClass({
  playClick: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track">
        <button onClick={this.playClick} className="btn btn-default btn-sm">
          {this.props.track.get('name')}
        <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
});
