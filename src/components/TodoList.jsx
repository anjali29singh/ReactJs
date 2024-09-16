/* eslint-disable react/prop-types */
import Item from "./Item";

export default function TodoList({ todos }) {
  return (
    <div>
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
