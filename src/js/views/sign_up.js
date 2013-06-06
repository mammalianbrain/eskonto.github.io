App.Views.SignUp = Backbone.View.extend({
  
  template: function(context) {
    var source   = $("#sign_up_tmpl").html();
    var template = Handlebars.compile(source);

    return template(context);
  },

  events: {
    'submit form' : 'process'
  },

  render: function() {
    this.$el.html(this.template());
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  },

  process: function(e) {
    e.preventDefault();

    $('.btn-primary').prop('disabled', true);
    $('#spinner').show();

    var attrs = $(e.currentTarget).serialize();

    $.post(App.base_url + '/users.json', attrs, function(data) {
      $('#login').hide();
      $('#signup').hide();
      $.cookie('auth_token', data['auth_token']);

      if (App.location && App.location !== 'login') {
        var loc = App.location;
        App.location = undefined;
        App.Router.navigate(loc, { trigger: true });
      } else {
        App.Router.navigate('escrows', { trigger: true });
      }
    }, 'json');
  }

})