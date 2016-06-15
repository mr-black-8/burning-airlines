var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '/search': 'search',
    '/flight/:id': function(id){
      var reservationView = new app.ReservationView();
      reservationView.render();
    }
  },

  search: function() {
    console.log("Empty client side URL, index method ran");
    var appView = new app.FlightView();
    appView.render();
  },
  
});
