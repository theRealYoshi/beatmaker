TrackActions = {
  createTrack: function(track){
    AppDispatcher.dispatch({
      actionType: OrganConstants.CREATE_TRACK,
      track: track
    });
    TrackApiUtil.createTrack(track);
  },

  addTrack: function(track){
    AppDispatcher.dispatch({
      actionType: OrganConstants.ADD_TRACK,
      track: track
    });
  },

  resetTracks: function(tracks){
    AppDispatcher.dispatch({
      actionType: OrganConstants.RESET_TRACKS,
      tracks: tracks
    });
  }
};
