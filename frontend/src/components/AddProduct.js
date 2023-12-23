import { Form } from "react-router-dom";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <>
      <Form
        className={styles["form-control"]}
        action="/admin/add-product"
        method="POST"
      >
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div>
          <label htmlFor="imageUrl">Img Url</label>
          <input type="text" id="imageUrl" name="imageUrl" />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>

        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </Form>
    </>
  );
};

export default AddProduct;
