var app = app || {};

app.SearchFlightView = Backbone.View.extend({
  events: {
    'click button' : 'searchFlight',
    'keyup textarea' : 'checkFlight'
  },

  checkFlight: function() {
    // var searchTerm = $("textarea").val();
    // console.log(searchTerm);
    // console.log(app.flights);
    // var results = app.flights.filter(function(flight) {
    //   return flight.get("from").indexOf(searchTerm) > -1
    // });
    // console.log(results);
  },

  searchFlight: function() {
    var fromSearch = $("#from").val();
    var toSearch = $("#to").val();
    console.log("From " + fromSearch + ", to " + toSearch);
    var results = app.flights.where({
      from: fromSearch,
      to: toSearch
    });
    console.log(results);

    var flightInfoView = new app.FlightInfoView(results);
    flightInfoView.render();
  },

  el: "#searchForm", // Reference an existing element with the ID of searchForm

  render: function() {
    console.log("Search template view should be rendered now");
    var searchFlightViewTemplate = $("#searchFlightViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
    this.$el.html(searchFlightViewTemplate);


    // Create a new instance of something called the secretInputViewTemplate which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate on to the page
  }

});
