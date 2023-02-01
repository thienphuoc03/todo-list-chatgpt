import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const API_BASE_URL = 'http://localhost:8080/api';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async todo => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, {
        title: todo,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/todos/${id}`,
        updatedTodo,
      );
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
      alert('Updated');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async id => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      alert('Deleted');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Todo List</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default Home;
