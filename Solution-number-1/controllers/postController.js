const Post = require('../models/post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.status(200).json({
        success: true,
        data: post,
      });
    } else {
      res.status(400).json({
        error: 'Post not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createPost = async (req, res, next) => {
  const { title, description, userRef } = req.body;
  try {
    const user = await new Post({
      title,
      description,
      userRef,
    });
    const newPost = await user.save();
    res.status(200).json({
      success: true,
      message: 'a new post was create !',
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.removePost = async (req, res, next) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    console.log(removedPost);
    if (removedPost) {
      res.status(200).json({
        status: 'success',
        message: 'The post was deleted !',
      });
    } else {
      res.status(400).json({
        error: 'error - the post not exist',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
