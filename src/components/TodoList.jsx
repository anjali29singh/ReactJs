/* eslint-disable react/prop-types */
import Item from "./Item";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      <ol>
        {todos.map((item, index) => (
          <li key={index}>
            <Item item={item} todos={todos} setTodos={setTodos} />
          </li>
        ))}
      </ol>
    </div>
  );
}
