import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          key={todo._id}
        />
      ))}
    </div>
  );
};

export default TodoList;
