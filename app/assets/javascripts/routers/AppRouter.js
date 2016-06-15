var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '/search': 'search'
  },

  search: function() {
    console.log("Empty client side URL, index method ran");
    var appView = new app.AppView();
    appView.render();
  }
});
