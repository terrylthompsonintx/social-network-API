const router = require('express').Router();
const { addthought, removethought, addreaction, removereaction } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addthought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(addreaction).delete(removethought);

router.route('/:userId/:thoughtId/:reactionId').delete(removereaction);
module.exports = router;