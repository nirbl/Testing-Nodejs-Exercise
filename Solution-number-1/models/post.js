const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    //required: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
    //required: true,
  },
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
