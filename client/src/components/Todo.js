import React, { useState } from 'react';

const Todo = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const [title, setTitle] = useState(todo.title);

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleUpdateTodo({ ...todo, title });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-between my-3 bg-gray-300 p-2 items-center rounded-md"
    >
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        className="w-4/5 bg-transparent p-2 border-none"
      />
      <div>
        <button
          onClick={() => handleDeleteTodo(todo._id)}
          className="bg-red-500 p-2 text-white rounded mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => handleUpdateTodo(todo._id, title)}
          className="bg-green-500 p-2 text-white rounded"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default Todo;

// import React from 'react';

// const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }) => {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <li
//           key={todo._id}
//           className="w-full flex justify-between my-3 bg-gray-300 p-2 items-center rounded-md"
//         >
//           {todo.title}
//           <div>
//             <button
//               onClick={() => handleDeleteTodo(todo._id)}
//               className="bg-red-500 p-2 text-white rounded mr-2"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleUpdateTodo(todo._id, todo.title)}
//               className="bg-green-500 p-2 text-white rounded"
//             >
//               Update
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
