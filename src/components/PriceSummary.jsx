import styles from "./PriceSummary.module.css";

function PriceSummary({ subtotal, deliveryCharge }) {
  const total = subtotal + deliveryCharge;

  return (
    <section className={styles.summary}>
      <h2>Price Detail</h2>
      <div className={styles.line}>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className={styles.line}>
        <span>Delivery Charges</span>
        <span>${deliveryCharge.toFixed(2)}</span>
      </div>
      <div className={styles.total}>
        <span>Total Charges</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button>Place Order</button>
    </section>
  );
}

export default PriceSummary;
