Meteor.methods({
  addLuchador(luchador) {
    LuchadorList.insert({
      luchador,
      date: new Date(),
    });
  },
  removeLuchador(_id) {
    LuchadorList.remove(_id);
  },
});