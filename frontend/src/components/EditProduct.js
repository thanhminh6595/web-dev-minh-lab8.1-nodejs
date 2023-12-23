import { Form, useRouteLoaderData } from "react-router-dom";
import styles from "./AddProduct.module.css";

const EditProduct = () => {
  const product = useRouteLoaderData("editProduct-loader");

  return (
    <>
      <Form
        className={styles["form-control"]}
        action={`/admin/edit-product/${product.id}`}
        method="POST"
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={product.title}
          />
        </div>

        <div>
          <label htmlFor="image">Img Url</label>
          <input
            type="text"
            id="image"
            name="imageUrl"
            defaultValue={product.imageUrl}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.1"
            id="price"
            name="price"
            defaultValue={product.price}
          />
        </div>

        <div>
          <label htmlFor="des">Description</label>
          <textarea
            id="des"
            name="description"
            defaultValue={product.description}
          />
        </div>

        <button type="submit" className={styles.btn}>
          Update Product
        </button>
      </Form>
    </>
  );
};

export default EditProduct;
