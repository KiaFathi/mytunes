// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // Listens to a change on the model, including change in playcount.
  // Then which, re-renders the library list with correct playcount.
  initialize: function(){
    this.model.on('change', function(){
      this.render();
    }, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>(Plays: <%= playcount %>)</td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
