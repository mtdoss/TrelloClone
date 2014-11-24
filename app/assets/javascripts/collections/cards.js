TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  url: "/api/cards",
  // url: function() {
  //   return this.list.board.url() + "/cards/";
  // },

  initialize: function(models, options) {
    this.list = options.list;
  }
});
