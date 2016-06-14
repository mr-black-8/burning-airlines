var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  initialize: function() {
    console.log("A new flight was created");
  }
});
