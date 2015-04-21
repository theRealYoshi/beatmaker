NOTE_MAP = {
  65: 'C3',// 'a'
  83: 'D3',// 's'
  68: 'E3',// 'd'
  70: 'F3',// 'f'
  74: 'G3',// 'j'
  75: 'A3',// 'k'
  76: 'B3',// 'l'
  186: 'C4',// ';'
}


$(function(){
  var _heldKeys = [];
  $(document).on('keydown', function(e){
    var code = e.keyCode;
    if(_heldKeys.indexOf(code) === -1){
      _heldKeys.push(code);
      KeyActions.keyPressed(NOTE_MAP[code]);
      console.log('pressed' + code);
    }
  });
  $(document).on('keyup', function(e){
    var code = e.keyCode;
    var idx = _heldKeys.indexOf(code);
    if(idx !== -1){
      _heldKeys.splice(idx, 1);
      KeyActions.keyReleased(NOTE_MAP[code]);
    }
  });
});

