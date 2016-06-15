var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations",
  model: app.Reservation,
  initialize: function() {
    console.log("A new flights collection");
    this.on("add", function(flight) {
      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
    });
  }
});
