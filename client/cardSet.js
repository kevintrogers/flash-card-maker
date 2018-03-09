Template.AddSet.onCreated(function() {
  this.autorun(() => {
    this.subscribe('cardSet');
  });
});

Template.AddSet.helpers({
    cardSet: () => {
        return CardSet.find({});
    }
});