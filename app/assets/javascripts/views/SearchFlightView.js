var app = app || {};

app.SecretInputView = Backbone.View.extend({
  events: {
    'click button' : 'createSecret',
    'keydown textarea' : 'checkForEnter'
  },

  checkForEnter: function(event) {
    // Check to see if the user hit the enter key
      // If they did, call the createSecret function

    app.ENTER_KEY = 13;

    if (event.which === app.ENTER_KEY) {
      event.preventDefault();
      this.createSecret();
    }
  },

  createSecret: function() {
    console.log("A secret should be created");
    var secret = new app.Secret();
    var userContent = this.$el.find("textarea").val();
    secret.set({
      content: userContent
    });
    secret.save();
    app.secrets.add(secret);
    this.$el.find("textarea").val("").focus();
    // Create a new instance of app.Secret
    // Set the content to be the value that the textarea has
    // save the new instance
    // Add that into the collection
  },

  el: "#secretForm", // Reference an existing element with the ID of secret

  render: function() {
    console.log("Secret template view should be rendered now");
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    // Set the HTML of the element with the ID of main to be that appViewTemplate, making sure to use the keyword 'this'
    this.$el.html(secretInputViewTemplate);

    // Create a new instance of something called the secretInputViewTemplate which should be defined in views/SecretInputView.js
    // Put all of the content from the secretInputViewTemplate on to the page
  }

});
