var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: "/users",

  initialize: function() {
    console.log("A new user was created");
  }
});
