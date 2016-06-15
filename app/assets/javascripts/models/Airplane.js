var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",

  initialize: function() {
    console.log("A new airplane was created");
  }
});
