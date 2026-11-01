import Stepper from "./Stepper";
import { useEffect, useRef, useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product, quantity, onSetQuantity }) {
  const [added, setAdded] = useState(false);
  const feedbackTimer = useRef(null);

  useEffect(() => () => clearTimeout(feedbackTimer.current), []);

  const handleAdd = () => {
    if (added) return;

    onSetQuantity(product, 1);
    setAdded(true);
    feedbackTimer.current = setTimeout(() => setAdded(false), 850);
  };

  return (
    <li className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title} />
        <span>{product.category}</span>
      </div>
      <div className={styles.meta}>
        <div>
          <p>{product.title}</p>
          <p>{product.subtitle}</p>
        </div>
        <p>${product.price.toFixed(2)}</p>
      </div>
      {added ? (
        <button
          className={styles.added}
          type="button"
          disabled
          aria-live="polite"
        >
          Added ✓
        </button>
      ) : quantity === 0 ? (
        <button type="button" onClick={handleAdd}>
          Add To Cart
        </button>
      ) : (
        <Stepper
          quantity={quantity}
          onChange={(newQuantity) => onSetQuantity(product, newQuantity)}
        />
      )}
    </li>
  );
}

export default ProductCard;
