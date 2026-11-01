import { Link, useOutletContext } from "react-router";
import CartRow from "../components/CartRow";
import PriceSummary from "../components/PriceSummary";
import styles from "./Cart.module.css";

const DELIVERY_CHARGE = 5;

function Cart() {
  const { cart, handleSetQuantity } = useOutletContext();

  if (cart.length === 0) {
    return (
      <div className={styles.page}>
        <h1>Your Cart</h1>

        <div className={styles.layout}>
          <div>
            <p>Your cart is empty.</p>
            <Link to="/shop">Browse the shop</Link>
          </div>
          <div />
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.page}>
      <h1>Your Cart</h1>

      <div className={styles.layout}>
        <ul className={styles.items}>
          {cart.map((item) => (
            <CartRow
              key={item.id}
              item={item}
              onSetQuantity={handleSetQuantity}
            />
          ))}
        </ul>

        <PriceSummary subtotal={subtotal} deliveryCharge={DELIVERY_CHARGE} />
      </div>
    </div>
  );
}

export default Cart;
