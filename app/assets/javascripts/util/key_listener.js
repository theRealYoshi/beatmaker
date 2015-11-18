$(function () {
  var NOTE_MAP = {}, tones = Object.keys(window.TONES);
  var validKeys = [
    65, // 'a'
    83, // 's'
    68, // 'd'
    70, // 'f'
    71, // 'g'
    72, // 'h'
    74, // 'j'
    75, // 'k'
    76, // 'l'
  ];
  tones.forEach(function(tone, i) {
    NOTE_MAP[validKeys[i]] = tone;
  });

  var _heldKeys = [];

  $(document).on('keydown', function (e) {
    var code = e.keyCode,
        valid = validKeys.indexOf(code) !== -1;
    if (_heldKeys.indexOf(code) === -1 && valid) {
      _heldKeys.push(code);
      KeyActions.keyPressed(NOTE_MAP[code]);
    } else {
      idx = _heldKeys.indexOf(code);
      _heldKeys.splice(idx, 1);
      KeyActions.keyReleased(NOTE_MAP[code]);
    }
  });
});
