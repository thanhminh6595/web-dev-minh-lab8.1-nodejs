import { redirect } from "react-router-dom";
import Cart from "../components/Cart";

const CartPage = () => {
  return <Cart />;
};

export default CartPage;

export const loader = async () => {
  const res = await fetch("http://localhost:5000/cart");

  const data = await res.json();

  return data;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const cartId = formData.get("productId");

  await fetch("http://localhost:5000/cart-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: cartId }),
    mode: "cors",
  });

  return redirect("/cart");
};
