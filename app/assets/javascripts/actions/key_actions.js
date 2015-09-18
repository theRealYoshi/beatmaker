KeyActions = {
  groupUpdate: function(notes){
    AppDispatcher.dispatch({
      actionType: OrganConstants.GROUP_UPDATE,
      note: notes
    });
  },

  keyPressed: function(noteName){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_PRESSED,
      note: noteName
    });
  },

  keyReleased: function(noteName){
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_RELEASED,
      note: noteName
    });
  }
};
