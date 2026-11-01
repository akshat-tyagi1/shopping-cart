import { Link, NavLink } from "react-router";
import styles from "./Navbar.module.css";

const getLinkClass = ({ isActive }) =>
  `${styles.navLink} ${isActive ? styles.active : ""}`;

function Navbar({ itemCount }) {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <Link to="/" className={styles.brand}>
        SPECTRA
      </Link>
      <div className={styles.navLinks}>
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/shop" className={getLinkClass}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={getLinkClass}>
          Cart (<span className={styles.cartCount} key={itemCount} aria-live="polite">{itemCount}</span>)
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
