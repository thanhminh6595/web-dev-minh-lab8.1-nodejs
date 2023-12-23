import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={styles["main-header"]}>
        <nav className={styles["main-header__nav"]}>
          <ul className={styles["main-header__item-list"]}>
            <li className={styles["main-header__item"]}>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to="/"
              >
                Shop
              </NavLink>
            </li>
            <li className={styles["main-header__item"]}>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Products
              </NavLink>
            </li>
            <li className={styles["main-header__item"]}>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Cart
              </NavLink>
            </li>
            <li className={styles["main-header__item"]}>
              <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Orders
              </NavLink>
            </li>
            <li className={styles["main-header__item"]}>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to="/admin/add-product"
              >
                Add Product
              </NavLink>
            </li>
            <li className={styles["main-header__item"]}>
              <NavLink
                to="/admin/products"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Admin Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
