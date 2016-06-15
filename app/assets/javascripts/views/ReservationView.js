app.ReservationView = Backbone.View.extend({
  events: {
    'click button' : 'searchFlight',
    'keyup textarea' : 'checkFlight'
  },

  checkFlight: function() {

  },

  searchFlight: function(e) {
    e.preventDefault();
    var fromSearch = $("#from").val();
    var toSearch = $("#to").val();
    console.log("From " + fromSearch + ", to " + toSearch);
    var results = app.flights.where({
      from: fromSearch,
      to: toSearch
    })
    console.log(results);
  },

  el: "#flightInfo", // Reference an existing element with the ID of searchForm

  render: function(id) {
    console.log("Reservation view");
    var reservationViewTemplate = $("#reservationViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
    this.$el.html(reservationViewTemplate);
    console.log(this);

    // Create a new instance of something called the secretInputViewTemplate which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate on to the page
  }

});
