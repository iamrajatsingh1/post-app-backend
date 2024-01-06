const { ALL_POSTS } = require('../../DATA');
const Post = require('../models/post.model');

const getAllPosts = async () => {
  try {
    if(ALL_POSTS) {
      return ALL_POSTS;
    }
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllPosts };
