var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#main", // Reference an existing element with the ID of main

  render: function() {
    console.log("Flight View rendered");
    var flightViewTemplate = $("#flightViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
    this.$el.html(flightViewTemplate);

    var searchFlightView = new app.SearchFlightView();
    searchFlightView.render();

  }
});
