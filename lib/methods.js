Meteor.methods({
  addCardSet(cardSet) {
    FlashCards.insert({
      cardSet,
      date: new Date(),
    });
  },
  removeCardSet(_id) {
    FlashCards.remove(_id);
  },
});