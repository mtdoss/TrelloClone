TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.model.lists().each(this.addList.bind(this));
    this.addNew();
  },

  addList: function(list) {
    var listsShow = 
      new TrelloClone.Views.ListsShow({ model: list });
    this.addSubview(".lists", listsShow);
  },

  addNew: function() {
    var listsNew = 
      new TrelloClone.Views.ListsNew({ model: this.model });
    this.addSubview(".new-list", listsNew);
  },

  render: function() {
    var view = this;
    var content = this.template({ board: this.model });
    
    this.$el.html(content);

    this.attachSubviews();
    return this;
  }
})