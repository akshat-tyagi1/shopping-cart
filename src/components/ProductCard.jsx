import Stepper from "./Stepper";
import styles from "./ProductCard.module.css";

function ProductCard({ product, quantity, onSetQuantity }) {
  return (
    <li className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price.toFixed(2)}</p>
      {quantity === 0 ? (
        <button onClick={() => onSetQuantity(product, 1)}>Add To Cart</button>
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
