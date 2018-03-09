import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

CardSet = new Mongo.Collection('cardSet');


CardSet.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
    
});




CardSchema = new SimpleSchema({
    
    name: {
        label: "Name",
        type: String
    },
      set: {
        type: Array
     },
     "set.$": Object,
     "set.$.problem": String,
     "set.$.answer": String,
     "set.$.explanation": String,
      inSet: {
          type: Boolean,
          defaultValue: true,
          
            autoform: {
                type: 'hidden'
            }
      },
    student: {
        type: String,
        label: "Author",
        autoform: {
            type: "hidden"
        },
        autoValue: function(){
            return this.userId;
        },
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
            type: "hidden"
        },
        autoValue: function() {
            return new Date();
        }

    }
});



Meteor.methods({

    deleteSet: function(id) {
        CardSet.remove(id);
    }

});


CardSet.attachSchema(CardSchema);
