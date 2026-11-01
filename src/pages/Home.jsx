import { Link } from "react-router";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Find something you will love</h1>
        <div className={styles.info}>
          <p>
            Browse our collection of clothing, jewelry and electronics, and add
            what you like to your cart.
          </p>
          <Link to="/shop" className={styles.cta}>
            Shop Now
          </Link>
        </div>
      </div>
      <img
        className={styles.image}
        src="https://placehold.co/600x400"
        alt="Featured products"
      />
    </section>
  );
}

export default Home;
