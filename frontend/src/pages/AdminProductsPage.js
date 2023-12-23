import { redirect } from "react-router-dom";
import AdminProductsCard from "../components/AdminProductsCard";

const AdminProductsPage = () => {
  return <AdminProductsCard />;
};

export default AdminProductsPage;

export const loader = async () => {
  const res = await fetch("http://localhost:5000/admin/products");

  const data = await res.json();

  return data;
};

export const deleteAction = async ({ request, params }) => {
  const dataForm = await request.formData();
  const productId = dataForm.get("productId");

  await fetch("http://localhost:5000/admin/products/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: productId }),
    mode: "cors",
  });

  return redirect("/");
};
