import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHome,
  faFolder,
  faUsers,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <span>Logo</span>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/dashboard"
          >
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/products"
          >
            <FontAwesomeIcon icon={faFolder} />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/sales"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/clients"
          >
            <FontAwesomeIcon icon={faUsers} />
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/employees"
          >
            <FontAwesomeIcon icon={faAddressBook} />
            Employees
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
