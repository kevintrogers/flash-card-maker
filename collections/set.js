import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

CardSet = new Mongo.Collection('cardSet');
ShoppingItems = new Mongo.Collection('shoppingList');


CardSet.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
    
});




CardSchema = new SimpleSchema ({
    name: {
        label: "name",
        type: String
    },
    amount: {
        label: "amount",
        type: "String"
    },
    author: {
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

RecipeSchema = new SimpleSchema({
    
    name: {
        label: "Name",
        type: String
    },
      set: {
        type: Array
     },
     "set.$": Object,
     "set.$.name": String,
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
    toggleMenuItem: function(id, currentMenuState){
        Recipes.update(id, {
            $set: {
                inMenu: !currentMenuState
            }
        });
        
    },
    deleteSet: function(id) {
        CardSet.remove(id);
    }

});


CardSet.attachSchema(CardSchema);
