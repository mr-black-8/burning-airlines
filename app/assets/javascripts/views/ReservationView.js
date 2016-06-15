app.ReservationView = Backbone.View.extend({
  events: {
    'click td' : 'reserveSeat',
  },

  reserveSeat: function() {
    console.log("Reserved?");
  },

  el: "#flightInfo", // Reference an existing element with the ID of searchForm

  render: function(id) {
    debugger;
    var airplane = app.flights.airplane.find(id);

    console.log(id);
    var reservationViewTemplate = $("#reservationViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
    this.$el.html(reservationViewTemplate);
    console.log(this);

    // Create a new instance of something called the secretInputViewTemplate which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate on to the page
  }

});
