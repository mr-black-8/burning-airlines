var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'li', // $("<li>")
  render: function() {
    console.log(this.model.toJSON());
    var content = this.model.get("content");
    this.$el.text(content);
    this.$el.prependTo("#secrets");
  }
})
