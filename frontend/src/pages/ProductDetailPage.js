import { redirect } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = () => {
  return <ProductDetail />;
};

export default ProductDetailPage;

export const loader = async ({ params }) => {
  const productId = params.productId;
  const res = await fetch("http://localhost:5000/products/" + productId);

  const data = await res.json();

  return data;
};

export const action = async ({ request }) => {
  const dataForm = await request.formData();

  const productId = dataForm.get("productId");

  await fetch("http://localhost:5000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
    mode: "cors",
  });

  return redirect("/cart");
};
