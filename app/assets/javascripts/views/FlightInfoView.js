var app = app || {};

app.FlightInfoView = Backbone.View.extend({
  el: '#flights', // $("<li>")
  initialize: function(results) {
    this.results = results;
  },
  render: function() {
    console.log(this);
    var results = this.results;
    if ($("table")) {
      $("table").remove();
    }
    var $table = $("<table class='highlight'><thead><tr><td>Date</td><td>Flight</td><td>From</td><td>To</td><td>Plane</td></thead><tbody></tbody></table>");
    for (var i = 0; i < results.length; i++) {
      var flight = results[i].toJSON();
      console.log(flight);
      var $row = $("<tr id='" + flight.id + "'><td>" + flight.date + "</td><td>" + flight.flightNum + "</td><td>" + flight.from + "</td><td>" + flight.to + "</td><td></td></tr>");
      $($table).append($row);
    }
    $(".section").append($table);

    $("tr").on("click", function() {
      window.location = "#flight/" + this.id;
    });
    // content = this.results.attributes;
    // this.$el.text(content);
    // this.$el.prependTo("#flights");
  }
});
