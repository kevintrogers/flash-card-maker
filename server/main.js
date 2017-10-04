import { Meteor } from 'meteor/meteor';
import '../lib/luchador.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('messages', function() {
  return LuchadorList.find();
});