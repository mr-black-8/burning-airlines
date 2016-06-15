app.flights = new app.Flights();

$(document).ready(function() {
  // Create a new instance of the router
  app.router = new app.AppRouter();
  // Start listening with the router
  Backbone.history.start();

  $('.button-collapse').sideNav();
  $('select').material_select();

});

var pollFlights = function() {
  app.flights.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 10000);
};
