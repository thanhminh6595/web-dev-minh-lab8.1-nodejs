import Shop from "../components/Shop";

const ShopPage = () => {
  return <Shop />;
};

export default ShopPage;

export const loader = async ({ request }) => {
  const url = request.url;
  const res = await fetch("http://localhost:5000/");

  const data = await res.json();

  return { data, url };
};
