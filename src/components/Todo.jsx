import { useState } from "react";
import Item from "./Item";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      <ol>
        {todos.map((item, index) => (
          <li key={index}>
            <Item item={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}
