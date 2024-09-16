/* eslint-disable react/prop-types */
import Item from "./Item";
import styles from "./todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
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
