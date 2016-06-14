app.flights = new app.Flights();

$(document).ready(function() {
  // Create a new instance of the router
  app.router = new app.AppRouter();
  // Start listening with the router
  Backbone.history.start();

  app.flights.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 10000)
});

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
