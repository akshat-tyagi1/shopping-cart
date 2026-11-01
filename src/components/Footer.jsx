import { Link } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Spectra</p>
      <p>Frames for a more considered view.</p>
      <div className={styles.links}>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Bag</Link>
      </div>
    </footer>
  );
}

export default Footer;
