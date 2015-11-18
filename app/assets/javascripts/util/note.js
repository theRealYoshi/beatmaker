(function (root) {
  var ctx = new (window.AudioContext || window.webkitAudioContext)();

  var Note = root.Note = function (mp3) {
    this.mp3 = new Audio('/assets/' + mp3 + '.mp3');
  };

  Note.prototype = {
    start: function () {
      // can't explain 0.3, it is a reasonable value
      this.mp3.play();
      this.mp3.loop = true;
    },

    stop: function () {
      this.mp3.pause();
      this.mp3.currentTime = 0;
      // this.gainNode.gain.value = 0;
    }
  };
})(this);
