App.Views.EscrowsList = Backbone.View.extend({

  template: JST['escrows.hbs'],

  initialize: function() {
    this.collection = new App.Collections.Escrows();
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({ escrows: this.collection.toJSON() }));
    this.show();
  },

  show: function() {
    $('#content').html(this.el);
  }

});