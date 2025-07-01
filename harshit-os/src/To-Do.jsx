import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className=" w-[100%] h-[100%] overflow-y-scroll">
        <div className="flex px-3 justify-between items-center my-3" >
            <h1 className="text-white text-2xl">To-Do List</h1>
            <div className="flex bg-gray-600 rounded-xl ">
              <input
                className="p-2 outline-none w-110 "
                placeholder="Add new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
              />
              <button className="bg-green-500 hover:bg-green-600 rounded-r-xl text-white p-2 "onClick={addTodo}>Add</button>
            </div>
        </div>
    
    <div className=" bg-gray-900 flex items-center justify-center">

       <div className="min-h-screen">
         <ul>
          {[...todos].reverse().map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-700 p-2 mb-2 rounded"
            >
              <div
                className={` cursor-pointer w-100 min-h-10 ${
                  todo.completed ? "line-through text-gray-400" : "text-white"
                }`}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </div>
              <button
                className="text-red-400 hover:text-red-600 ml-2"
                onClick={() => deleteTodo(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
       </div>

        {todos.length === 0 && (
          <p className="text-gray-400 text-center">No tasks yet!</p>
        )}
      </div>
    </div>
  );
}
