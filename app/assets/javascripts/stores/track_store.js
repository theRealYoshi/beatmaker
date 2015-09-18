(function(root){
  var _tracks = [];
  var CHANGE_EVENT = "change";

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _tracks.slice(0);
    },

    _addTrack: function(track){
      var idx = _tracks.indexOf(track);
      if(idx == -1){
        _tracks.push(track);
        this.emit(CHANGE_EVENT);
      }
    },

    _resetTracks: function(tracks){
      _tracks = tracks.slice();
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case OrganConstants.ADD_TRACK:
          root.TrackStore._addTrack(payload.track);
          break;
        case OrganConstants.RESET_TRACKS:
          root.TrackStore._resetTracks(payload.tracks);
      }
    })
  });
})(this);
