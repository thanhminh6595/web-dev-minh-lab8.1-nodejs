import { Form, useRouteLoaderData } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const loaderData = useRouteLoaderData("detail-loader");
  const product = loaderData.product;

  return (
    <>
      <div className={styles["card__product"]}>
        <h1>{product.title}</h1>
        <hr />
        <img src={product.imageUrl} alt={product.title} />
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <Form className={styles["card__actions"]} action="/cart" method="POST">
          <button type="submit" className={styles.btn}>
            Add to cart
          </button>
          <input type="hidden" value={product.id} name="productId" />
        </Form>
      </div>
    </>
  );
};

export default ProductDetail;
