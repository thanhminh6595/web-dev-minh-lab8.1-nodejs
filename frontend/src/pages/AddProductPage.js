import { redirect } from "react-router-dom";
import AddProduct from "../components/AddProduct";

const AddProductPage = () => {
  return <AddProduct />;
};

export default AddProductPage;

export const action = async ({ request }) => {
  const dataForm = await request.formData();
  const product = {
    id: Math.random(),
    title: dataForm.get("title"),
    imageUrl: dataForm.get("imageUrl"),
    price: dataForm.get("price"),
    description: dataForm.get("description"),
  };

  const res = await fetch("http://localhost:5000/admin/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
    mode: "cors",
  });

  if (!res.ok) throw new Error("Something went wrong!");

  return redirect("/");
};
