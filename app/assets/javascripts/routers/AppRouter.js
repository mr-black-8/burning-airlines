var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'search',
    'flight/:id': function(id) {
      $("#main").empty();
      var reservationView = new app.ReservationView({collection: app.Reservations});
      reservationView.render(id);
    }
  },

  search: function() {

    console.log("Empty client side URL, index method ran");
    var flightView = new app.FlightView();
    flightView.render();
  },

});
