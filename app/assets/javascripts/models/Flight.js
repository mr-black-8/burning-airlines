var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/search",

  defaults: {
    content: ""
  },

  initialize: function() {
    console.log("A new flight was created");
  }
});
