import { redirect } from "react-router-dom";
import EditProduct from "../components/EditProduct";

const EditProductPage = () => {
  return <EditProduct />;
};

export default EditProductPage;

export const loader = async ({ params }) => {
  const prodId = params.productId;

  const res = await fetch("http://localhost:5000/admin/edit-product/" + prodId);

  const data = await res.json();

  return data;
};

export const action = async ({ request, params }) => {
  const prodId = params.productId;
  const formData = await request.formData();

  const updatedProduct = {
    title: formData.get("title"),
    price: formData.get("price"),
    imageUrl: formData.get("imageUrl"),
    description: formData.get("description"),
  };

  await fetch("http://localhost:5000/admin/edit-product/" + prodId, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
    mode: "cors",
  });

  return redirect("/");
};
