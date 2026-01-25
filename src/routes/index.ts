import ProfileView from "@/views/profile/Profile";
import CartView from "../views/cart/Cart";
import CheckoutView from "../views/checkout/Checkout";
import HomeView from "../views/home/Home";
import OrderSuccessView from "../views/order_success/OrderSuccess";
import ProductView from "../views/product/Product";
import ProductDetailView from "../views/product_detail/ProductDetail";
import WishlistView from "@/views/wishlist/Wishlist";

const routes = [
  {
    path: "/",
    component: HomeView,
    layout: "main",
  },
  {
    path: "/products",
    component: ProductView,
    layout: "main",
  },
  {
    path: "/product/:id",
    component: ProductDetailView,
    layout: "main",
  },
  {
    path: "/cart",
    component: CartView,
    layout: "main",
  },
  {
    path: "/checkout",
    component: CheckoutView,
    layout: "main",
  },
  {
    path: "/order-success",
    component: OrderSuccessView,
    layout: "main",
  },
  {
    path: "/profile",
    component: ProfileView,
    layout: "main",
  },
  {
    path: "/wishlist",
    component: WishlistView,
    layout: "main",
  },
];

export default routes;
