import styles from "./todoItem.module.css";
// eslint-disable-next-line react/prop-types
export default function Item({ item }) {
  function handleDelete() {
    console.log("delete button clicked");
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}

        <span>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
