TrelloClone.Views.CardsShow = Backbone.View.extend({
  template: JST["cards/show"],
  tagName: 'p',

  events: {
    "click": "doStuff",
    "click button.delete": "removeCard"
  },

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    
    return this;
  },

  doStuff: function() {
    console.log("doing stuff")
  },

  removeCard: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
})