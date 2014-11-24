TrelloClone.Views.ListsNew = Backbone.View.extend({
  template: JST["lists/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template({ board: this.model }); //might not need to pass in board
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newList = new TrelloClone.Models.List(params["list"]);
    newOrd = this.model.lists().length;
    newList.set({ ord: newOrd }) //this is probably not a great way to do this (on submit)
    newList.save({}, {
      success: function() {
        view.model.lists().add(newList);
        view.render();
        //maybe navigate somewhere
      }
    });
  }
});