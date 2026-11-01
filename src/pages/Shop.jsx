import { useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard";
import styles from "./Shop.module.css";

function Shop() {
  const { cart, handleSetQuantity, products, loading, error } =
    useOutletContext();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <>
      <h1>Our Collection</h1>
      <ul className={styles.grid}>
        {products.map((product) => {
          const entry = cart.find((item) => item.id === product.id);

          return (
            <ProductCard
              key={product.id}
              product={product}
              quantity={entry ? entry.quantity : 0}
              onSetQuantity={handleSetQuantity}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Shop;
