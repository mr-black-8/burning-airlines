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
    var res;
    app.flights = new app.Flights();
    app.reservations = new app.Reservations();
    yourId = parseInt(id);
    app.reservations.fetch().done(function() {
      res = app.reservations.where({
        flight_id: yourId
      });
      console.log(res);
    })
    app.flights.fetch().done(function () {
      $('.section').empty();
      flight = app.flights.where({
        id: yourId
      })
      var reservationViewTemplate = $("#reservationViewTemplate").html();
      view.$el.html(reservationViewTemplate);
      console.log(res[0].attributes);
      $('h1').text();
      console.log(flight);
    });
  }

});
