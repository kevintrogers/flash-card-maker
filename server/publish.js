
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('cardSet', function() {
    return CardSet.find({student: this.userId})
});

Meteor.publish('cardSet', function(id) {
    check(id, String);
    return CardSet.find({_id: id});
});


  Meteor.publish('users', function(){
  return Meteor.users.find({_id: this.userId});
});
}
 