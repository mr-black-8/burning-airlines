var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '/search': 'search',

    '/flight/:id': function(id) {
      var reservationView = new app.ReservationView();
      reservationView.render(id);
    }
  },

  search: function() {
    console.log("Empty client side URL, index method ran");
    var flightView = new app.FlightView();
    flightView.render();
  }
});
