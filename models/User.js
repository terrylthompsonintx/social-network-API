const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const moment = require('moment');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true,
        unique:true
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      },
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ]
    },
      {
      toJSON: {
        virtuals: true,
        getters: true
        },
      id: false
      }
    
);

  // get total count of comments and replies on retrieval
/*UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce((total, thoughts) => total + thoughts.reactions.length + 1, 0);
});*/

 
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;