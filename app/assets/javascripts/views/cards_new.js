TrelloClone.Views.CardsNew = Backbone.View.extend({

  form: JST["cards/new"],
  button: JST["cards/button"],

  events: {
    "click button": "showForm",
    "submit form": "submit"
  },

  initialize: function() {
    this.template = this.button;
  },

  render: function () {
    var content = this.template({ list: this.model }); //might not need to pass in board
    this.$el.html(content);

    return this;
  },

  showForm: function(event) {
    event.preventDefault();
    this.template = this.form;
    this.render();
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newCard = new TrelloClone.Models.Card(params["card"]);
    var newOrd = this.model.cards().length;
    newCard.set({ ord: newOrd }) //this is probably not a great way to do this (on submit)
    var that = this;
    newCard.save({}, {
      success: function() {
        // view.model.lists.add(newCard);
        that.template = that.button;
        that.collection.add(newCard);
        view.render();
      }
    });
  }
});