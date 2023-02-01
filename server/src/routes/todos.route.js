const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Add a todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true },
    );
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Todo removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
