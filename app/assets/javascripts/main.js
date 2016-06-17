app.flights = new app.Flights();
app.reservations = new app.Reservations();

$(document).ready(function() {
  // Create a new instance of the router
  app.router = new app.AppRouter();
  // Start listening with the router
  Backbone.history.start();

  $('.button-collapse').sideNav();
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $('.parallax').parallax();

});

var pollReservations = function() {

  window.setInterval(function () {
    app.reservations.fetch();
  }, 1000);
};

var pollFlights = function() {
  app.flights.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 10000);
};
