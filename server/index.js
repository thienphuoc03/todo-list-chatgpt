const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./src/routes/todos.route');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(error => console.error(error));

// Initialize express app
const app = express();

// Parse incoming requests data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/todos', routes);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
