const { Thought, User } = require('../models');

const thoughtController = {
  // add thought to user
 
  addthought({ params, body }, res) {
    console.log(body);
    thought.create(body)
      .then(({ _id }) => {
        return user.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbuserData => {
        if (!dbuserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbuserData);
      })
      .catch(err => res.json(err));
  },

  addreaction({ params, body }, res) {
    thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbuserData => {
        if (!dbuserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbuserData);
      })
      .catch(err => res.json(err));
  },

  removereaction({ params }, res) {
    thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { replies: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then(dbuserData => res.json(dbuserData))
      .catch(err => res.json(err));
  },
  
  // remove thought
  removethought({ params }, res) {
    thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedthought => {
        if (!deletedthought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return user.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbuserData => {
        if (!dbuserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbuserData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;