var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,
  initialize: function() {
    console.log("A new flights collection");
    this.on("add", function(flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
    })
  }
});
