import profile from "@/views/profile/profile";
import Cart from "../views/cart/Cart";
import Checkout from "../views/checkout/Checkout";
import Home from "../views/home/Home";
import OrderSuccess from "../views/order_success/OrderSuccess";
import Product from "../views/product/Product";
import ProductDetail from "../views/product_detail/ProductDetail";

const routes = [
  {
    path: "/",
    component: Home,
    layout: "main",
  },
  {
    path: "/products",
    component: Product,
    layout: "main",
  },
  {
    path: "/product:id",
    component: ProductDetail,
    layout: "main",
  },
  {
    path: "/cart",
    component: Cart,
    layout: "main",
  },
  {
    path: "/checkout",
    component: Checkout,
    layout: "main",
  },
  {
    path: "/order-success",
    component: OrderSuccess,
    layout: "main",
  },
  {
    path: "/profile",
    component: profile,
    layout: "main",
  },
];

export default routes;
