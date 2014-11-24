
TrelloClone.Views.BoardsIndex = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render)
	},

  template: JST["boards/index"],
	tagName: "ul",

  render: function () {
  	console.log("rendering view");
    var content = this.template({ boards: this.collection });
    this.$el.html(content);

    return this;
  }
})
