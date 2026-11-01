import styles from "./Stepper.module.css";

function Stepper({ quantity, onChange }) {
  return (
    <div className={styles.stepper}>
      <button
        aria-label="Decrease quantity"
        onClick={() => onChange(quantity - 1)}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        aria-label="Increase quantity"
        onClick={() => onChange(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Stepper;
