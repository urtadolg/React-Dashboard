import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.scss";

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
            <FontAwesomeIcon icon="home" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/products"
          >
            <FontAwesomeIcon icon="folder" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/sales"
          >
            <FontAwesomeIcon icon="shopping-cart" />
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/clients"
          >
            <FontAwesomeIcon icon="users" />
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/employees"
          >
            <FontAwesomeIcon icon="address-book" />
            Employees
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
