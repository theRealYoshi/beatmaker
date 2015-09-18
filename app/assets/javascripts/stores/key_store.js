(function(root){
  var _keys = [];
  var CHANGE_EVENT = "change";

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _keys.slice(0);
    },

    _removeKey: function(key){
      var idx = _keys.indexOf(key);
      if(idx != -1){
        _keys.splice(idx, 1);
        this.emit(CHANGE_EVENT);
      }
    },

    _addKey: function(key){
      var idx = _keys.indexOf(key);
      if(idx == -1){
        _keys.push(key);
        this.emit(CHANGE_EVENT);
      }
    },

    _groupUpdate: function(keys){
      _keys = keys.slice();
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
        case OrganConstants.KEY_PRESSED:
          root.KeyStore._addKey(payload.note);
          break;
        case OrganConstants.KEY_RELEASED:
          root.KeyStore._removeKey(payload.note);
          break;
        case OrganConstants.GROUP_UPDATE:
          root.KeyStore._groupUpdate(payload.note);
          break;
      }
    })
  });
})(this);
