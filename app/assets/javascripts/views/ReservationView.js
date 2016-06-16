app.ReservationView = Backbone.View.extend({
  events: {
    'click td' : 'reserveSeat',
  },

  reserveSeat: function(e) {
    var col = $(e.currentTarget).data("col");
    var row = $(e.currentTarget).data("row");
    var seatMap = this.seatMap;

    // console.log(col);
    // console.log(row);

    // console.log(this.seatMap);

    // console.log(seatMap[row][col]);

    var res = this.res;

    // console.log(res);

    var alreadyThere;

    for (var i = 0; i < seatMap.length; i++) {
      alreadyThere = _.contains(seatMap[i], currentUser);
      if (alreadyThere) {
        break;
      }
    }

    // console.log(seatMap);
    // console.log(currentUser);
    // console.log(alreadyThere);

    if (alreadyThere) {
    } else {
      if (seatMap[row][col] === null) {
        // console.log(this);
        seatMap[row][col] = currentUser;
        // console.log(seatMap);
        var saveReservation = app.reservations.get(1);
        saveReservation.set("seat_map", JSON.stringify(seatMap));
        saveReservation.save();
      }
    }

    // var saveReservation = app.reservations.get(3);
    // saveReservation.set("seat_map", "[[null, null],[null, null]]");
    // saveReservation.save();

    // console.log(thing);

  },

  el: "#main", // Reference an existing element with the ID of searchForm

  render: function(id) {
    var view = this;
    var res;
    app.flights = new app.Flights();
    app.reservations = new app.Reservations();
    yourId = parseInt(id);
    app.reservations.fetch().done(function() {
      res = app.reservations.findWhere({
        flight_id: app.flight_id
      });
      // console.log(res);
      view.res = res;

      app.flights.fetch().done(function () {
        $('#main').empty();
        var flight = app.flights.findWhere({
          id: app.flight_id
        })
        var reservationViewTemplate = $("#reservationViewTemplate").html();
        view.$el.html(reservationViewTemplate);
        flightNum = flight.attributes.flightNum;
        flightFrom = flight.attributes.from;
        flightTo = flight.attributes.to;
        // console.log(res.attributes);
        // console.log(flight.attributes.flightNum);
        var reserveHeading = $('<h1>').text("Flight " + flightNum);
        var headerTwo = $('<h2>').text(flightFrom + " to " + flightTo);
        view.$el.append(reserveHeading);
        view.$el.append(headerTwo);
        // console.log(currentUser);

        var seatMap = res.attributes.seat_map;

        var newSeats = JSON.parse(seatMap)

        $table = $("<table>");

        view.seatMap = newSeats;

        for (var i = 0; i < newSeats.length; i++) {
          $row = $("<tr>");
          $table.append($row);
          for (var j = 0; j < newSeats[i].length; j++) {
            $cell = $("<td data-row='" + i + "' data-col='" + j + "'>");
            $cell.text(newSeats[i][j]);
            $row.append($cell);
          }
        }

        view.$el.append($table);
      });
    });
  }

});
