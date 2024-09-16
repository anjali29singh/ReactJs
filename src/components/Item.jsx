/* eslint-disable react/prop-types */
import styles from "./todoItem.module.css";
export default function Item({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}

        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
