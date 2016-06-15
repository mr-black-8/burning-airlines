app.ReservationView = Backbone.View.extend({
  events: {
    'click td' : 'reserveSeat',
  },

  reserveSeat: function() {
    console.log("Reserved?");
  },

  el: "#flightInfo", // Reference an existing element with the ID of searchForm

  render: function(id) {
    var view = this;
    app.flights = new app.Flights();
    app.flights.fetch().done(function () {
      console.log(id);
      var results = app.flights.get( id );
      console.log(results);

      var reservationViewTemplate = $("#reservationViewTemplate").html();
      // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
      view.$el.html(reservationViewTemplate);
      console.log(view);

    });

    // Create a new instance of something called the secretInputViewTemplate which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate on to the page
  }

});
