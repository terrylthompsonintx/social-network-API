const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser, 
  addFriend,
  removeFriend
} = require('../../controllers/User-controller');
// Set up GET all and POST at /api/Users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .put(addFriend)
  .delete(removeFriend);

module.exports = router;