var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    content: ""
  },

  initialize: function() {
    console.log("A new flight was created");
  }
});
