import styles from "./CardProduct.module.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const CardProduct = () => {
  const loaderData = useRouteLoaderData("products-loader");

  const products = loaderData.data;

  return (
    <main>
      <div>
        <ul className={styles.grid}>
          {products.products.length > 0 &&
            products.products.map((product) => {
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
                    <NavLink to={`/products/${product.id}`}>
                      <button type="button" className={styles.btn}>
                        Detail
                      </button>
                    </NavLink>

                    <Form action="/cart" method="POST">
                      <button type="submit" className={styles.btn}>
                        Add to cart
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

          {(products.products.length === 0 || !products.products) && (
            <h2>No products found!</h2>
          )}
        </ul>
      </div>
    </main>
  );
};

export default CardProduct;
