import React, { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    handleAddTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="form-input w-full border bg-gray-100 text-xl p-2 mx-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add todo..."
      />
      <button
        type="submit"
        className="p-2 bg-green-400 text-white mx-2 hover:bg-green-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
