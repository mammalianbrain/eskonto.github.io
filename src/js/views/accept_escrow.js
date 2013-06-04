App.Views.AcceptEscrow = App.Views.EscrowBaseView.extend({

  template: JST['accept_escrow.hbs'],

  events: {
    'click #accept' : 'process'
  },

  process: function(e) {
    e.preventDefault();

    var self = this;
    var url  = App.base_url + '/escrows/' + this.model.get('uuid') + '/accept.json?auth_token=' + App.auth_token();

    $.post(url, { '_method' : 'put' }, function(data) {
      App.Router.navigate('escrows/' + self.model.get('uuid'), { trigger: true });
    }, 'json');
  }

});