import styles from "./Cart.module.css";
import { Form, useRouteLoaderData } from "react-router-dom";

const Cart = () => {
  const productCart = useRouteLoaderData("cart-loader");

  return (
    <>
      <h1>Cart Page</h1>
      {(productCart[0].length === 0 ||
        productCart[0].products.length === 0) && <p>No products in you cart</p>}
      {productCart[0].products && productCart[0].products.length > 0 && (
        <div>
          <h2>List products</h2>
          <ul className={styles["list-controller"]}>
            {productCart[0].products &&
              productCart[0].products.map((product) => {
                return (
                  <li key={product.id} className={styles["list-item"]}>
                    <h3>{product.title}</h3>
                    <p>
                      ({product.qty} x {product.price}$)
                    </p>
                    <Form action="/cart-delete" method="DELETE">
                      <input
                        type="hidden"
                        value={product.id}
                        name="productId"
                      />
                      <button type="submit" className={styles.btn}>
                        Delete
                      </button>
                    </Form>
                  </li>
                );
              })}
          </ul>
          <div className={styles["total-price"]}>
            <h2>Total Amount:</h2>
            <h3>
              {`${
                productCart[0].totalPrice
                  ? productCart[0].totalPrice.toFixed(2)
                  : "0"
              }`}
              $
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
