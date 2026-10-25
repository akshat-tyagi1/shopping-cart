import { Link, NavLink } from "react-router";
import styles from "./Navbar.module.css";

const getLinkClass = ({ isActive }) =>
  `${styles.navLink} ${isActive ? styles.active : ""}`;

function Navbar({ itemCount }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Spectra
      </Link>
      <div className={styles.navLinks}>
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/shop" className={getLinkClass}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={getLinkClass}>
          Cart ({itemCount})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
