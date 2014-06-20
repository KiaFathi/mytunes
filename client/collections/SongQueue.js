// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function (model) {
      var play = false;
      if(model === this.models[0]){
        this.trigger('stop');
        if(this.length > 1){
          play = true;
        }
      }
      this.remove(model);
      if(play){
        this.playFirst();
      }
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
