import styles from "./CardProduct.module.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const AdminProductsCard = () => {
  const loaderData = useRouteLoaderData("adminProds-loader");

  return (
    <main>
      <div>
        <ul className={styles.grid}>
          {loaderData.length > 0 &&
            loaderData.map((product) => {
              return (
                <li className={styles.card} key={product.id}>
                  <div className={styles["card__header"]}>
                    <h1>{product.title}</h1>
                  </div>
                  <div className={styles["card__image"]}>
                    <img src={product.imageUrl} alt="Book" />
                  </div>
                  <div className={styles["card__content"]}>
                    <h2>{product.price}$</h2>
                    <p>{product.description}</p>
                  </div>
                  <div className={styles["card__actions"]}>
                    <NavLink to={`/admin/edit-product/${product.id}?edit=true`}>
                      <button type="submit" className={styles.btn}>
                        Edit
                      </button>
                      <input
                        type="hidden"
                        value={product.id}
                        name="productId"
                      />
                    </NavLink>
                    <Form action="/admin/products" method="DELETE">
                      <button type="submit" className={styles.btn}>
                        Delete
                      </button>
                      <input
                        type="hidden"
                        value={product.id}
                        name="productId"
                      />
                    </Form>
                  </div>
                </li>
              );
            })}
          {(loaderData.length === 0 || !loaderData) && (
            <h2>No products found!</h2>
          )}
        </ul>
      </div>
    </main>
  );
};

export default AdminProductsCard;
