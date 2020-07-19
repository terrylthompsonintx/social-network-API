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
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      },
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      thought: [
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
UserSchema.virtual('thoughtCount').get(function() {
    return this.thought.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

 
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;