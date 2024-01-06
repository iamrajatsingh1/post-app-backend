const express = require('express');
const PostService = require('../services/post.service');

const postRouter = express.Router();

// Get all posts
postRouter.get('/', async (_req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a post by ID
postRouter.get('/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await PostService.getPostById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new post
postRouter.post('/', async (req, res) => {
  try {
    const newPost = await PostService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a post by ID
postRouter.put('/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const updatedPost = await PostService.updatePost(postId, req.body);
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a post by ID
postRouter.delete('/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const deletedPost = await PostService.deletePost(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(deletedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = postRouter;
