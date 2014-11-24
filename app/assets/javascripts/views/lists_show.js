TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],
  // tagName: 'li',
  className: 'list',
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.model.cards(), "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    // this.listenTo(this.model.cards(), "add", this.render);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.model.cards().each(this.addCard.bind(this));
    
    this.addButton();
  },


  addCard: function(card) {
    var cardsShow = 
      new TrelloClone.Views.CardsShow({ model: card });
    this.addSubview(".cards", cardsShow);
    // this.render();
  },

  removeCard: function (card) {
    var subview = _.find(
      this.subviews(".cards"),
      function (subview) {
        return subview.model === card;
      }
    );

    this.removeSubview(".cards", subview);
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    
    this.attachSubviews();
    return this;
  },

  //does this function ever get called  
  addNew: function() {
    var cardsNew = 
      new TrelloClone.Views.CardsNew({ 
        model: this.model,
        collection: this.model.cards() 
      });
    this.addSubview(".new-card", cardsNew);
  },

  addButton: function() {
    var buttonNew = 
      new TrelloClone.Views.CardsNew({ 
        model: this.model,
        collection: this.model.cards()
      });
    this.addSubview(".add-card", buttonNew);
  },

  onRender: function () {
    Backbone.CompositeView.prototype.onRender.call(this);
    this.$('.cards').sortable({ connectWith: '.cards' });
  }
  
});
