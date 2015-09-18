var ControlActions = {
  record: function () {
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_PRESSED,
      note: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_RELEASED,
      note: noteName
    });
  }
};
