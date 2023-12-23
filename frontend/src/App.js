import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ShopPage, { loader as productsLoader } from "./pages/ShopPage";
import AddProductPage, {
  action as addProductActions,
} from "./pages/AddProductPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage, {
  loader as detailLoader,
  action as cartAction,
} from "./pages/ProductDetailPage";
import CartPage, {
  loader as cartLoader,
  action as deleteCartAction,
} from "./pages/CartPage";
import AdminProductsPage, {
  loader as adminProdLoader,
  deleteAction,
} from "./pages/AdminProductsPage";
import EditProductPage, {
  action as editProductActions,
  loader as editProductLoader,
} from "./pages/EditProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      id: "products-loader",
      loader: productsLoader,
      children: [
        { path: "", element: <ShopPage /> },
        { path: "products", element: <ProductsPage /> },
        {
          path: "products/:productId",
          element: <ProductDetailPage />,
          id: "detail-loader",
          loader: detailLoader,
        },
        {
          path: "cart",
          element: <CartPage />,
          id: "cart-loader",
          action: cartAction,
          loader: cartLoader,
        },
        {
          path: "cart-delete",
          element: <CartPage />,
          action: deleteCartAction,
        },
        {
          path: "admin",
          children: [
            {
              path: "edit-product/:productId",
              element: <EditProductPage />,
              id: "editProduct-loader",
              action: editProductActions,
              loader: editProductLoader,
            },
            {
              path: "add-product",
              element: <AddProductPage />,
              action: addProductActions,
            },
            {
              path: "products",
              element: <AdminProductsPage />,
              id: "adminProds-loader",
              loader: adminProdLoader,
              action: deleteAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
