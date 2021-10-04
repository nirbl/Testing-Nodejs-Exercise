const express = require('express');
const postsControllers = require('../controllers/postController');
const router = express.Router();

router.route('/').get(postsControllers.getAllPosts);
router.route('/:id').get(postsControllers.getPost);
router.route('/').post(postsControllers.createPost);
router.route('/:id').delete(postsControllers.removePost);

module.exports = router;
