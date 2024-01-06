const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: Number,
  username: String,
  anonymous: Boolean,
  profileImage: String,
  content: String,
  createdAt: Date,
  replies: [
    {
      username: String,
      content: String,
      createdAt: Date,
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
