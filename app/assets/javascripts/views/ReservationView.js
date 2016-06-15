app.ReservationView = Backbone.View.extend({
  events: {
    'click td' : 'reserveSeat',
  },

  reserveSeat: function() {
    console.log("Reserved?");
  },

  el: "#main", // Reference an existing element with the ID of searchForm

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
      $('#main').empty();
      flight = app.flights.where({
        id: yourId
      })
      var reservationViewTemplate = $("#reservationViewTemplate").html();
      view.$el.html(reservationViewTemplate);
      flightNum = flight[0].attributes.flightNum;
      flightFrom = flight[0].attributes.from;
      flightTo = flight[0].attributes.to;
      console.log(res[0].attributes);
      console.log(flight[0].attributes.flightNum);
      var reserveHeading = $('<h1>').text("Flight " + flightNum);
      var headerTwo = $('<h2>').text(flightFrom + " to " + flightTo);
      view.$el.append(reserveHeading);
      view.$el.append(headerTwo);

      var seatMap = res[0].attributes.seat_map;

      console.log(seatMap)

      $table = $("<table>")

      for (var i = 0; i < seatMap.length; i++) {
        $row = $("<tr>")
        $table.append($row);
        for (var j = 0; j < seatMap[i].length; j++) {
          $cell = $("<td>");
          $row.append($cell);
        }
      }

      view.$el.append($table);
    });
  }

});
