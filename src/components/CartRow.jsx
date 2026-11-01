import Stepper from "./Stepper";
import styles from "./CartRow.module.css";

function CartRow({ item, onSetQuantity }) {
  return (
    <li className={styles.row}>
      <img src={item.image} alt={item.title} />
      <div className={styles.details}>
        <p>{item.title}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.controls}>
        <Stepper
          quantity={item.quantity}
          onChange={(newQuantity) => onSetQuantity(item, newQuantity)}
        />
        <button onClick={() => onSetQuantity(item, 0)}>Remove</button>
      </div>
    </li>
  );
}

export default CartRow;
