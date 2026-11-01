import { useOutletContext } from "react-router";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./Shop.module.css";

function Shop() {
  const [filter, setFilter] = useState("All frames");
  const { cart, handleSetQuantity, products, loading, error } =
    useOutletContext();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  const categories = ["All frames", "Sunglasses", "Optical"];
  const visibleProducts =
    filter === "All frames"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section className={styles.page}>
      <header className={styles.intro}>
        <div className={styles.headingBlock}>
          <p className={styles.kicker}>The Spectra collection</p>
          <h1>
            Frames with
            <br />a point of view.
          </h1>
        </div>
      </header>
      <nav className={styles.categories} aria-label="Filter frames by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={filter === category ? styles.selected : ""}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <ul className={styles.grid}>
        {visibleProducts.map((product) => {
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
    </section>
  );
}

export default Shop;
