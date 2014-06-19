// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function (model) {
      this.remove(model);
    });

    this.on('ended', function () {
      this.remove(this.models[0]);
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function () {
    this.models[0].play();
  }

});
