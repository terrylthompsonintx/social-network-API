const router = require('express').Router();
const { allthought, addthought, removethought, addreaction, removereaction } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addthought);
router.route('/').get(allthought);
// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(addreaction).delete(removethought);

router.route('/:userId/:thoughtId/:reactionId').delete(removereaction);
module.exports = router;