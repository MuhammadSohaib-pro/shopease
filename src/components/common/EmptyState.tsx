import { ArrowRight, Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toggleCart } from "@/store/cart/CartSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";

const EmptyState = ({ type }: { type: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  if (type === "cart-drawer-empty-section") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-3">
        <div className="h-16 w-16 p-4 bg-muted rounded-full flex items-center justify-center">
          <ShoppingBag size={30} className="text-lg text-muted-foreground" />
        </div>
        <span className="text-base text-primary">Your cart is empty</span>
        <span className="text-sm text-muted-foreground">
          Start shopping to add items to your cart
        </span>
        <Link to={"/products"}>
          <Button
            onClick={() => dispatch(toggleCart())}
            className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background"
          >
            Browse Product
          </Button>
        </Link>
      </div>
    );
  }
  if (type === "cart-view-empty-section") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-3">
        <div className="h-20 w-20 p-4 bg-card/50 rounded-full flex items-center justify-center">
          <ShoppingBag className="text-lg h-10 w-10 text-muted-foreground" />
        </div>
        <h4 className="text-2xl text-primary">Your Cart is Empty</h4>
        <span className="text-sm text-muted-foreground text-center max-w-md">
          Looks like you haven't added any items to your cart yet. Start
          shopping to fill it up!
        </span>
        <Link to={"/products"}>
          <Button size={"lg"} className="cursor-pointer my-8 rounded-md">
            Start Shopping
            <ArrowRight />
          </Button>
        </Link>
      </div>
    );
  }
  if (type === "checkout-view-empty-section") {
    return (
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="h-full w-full flex flex-col items-center justify-center gap-3">
            <h4 className="text-2xl text-primary">Your Cart is Empty</h4>
            <span className="text-sm text-muted-foreground text-center max-w-md">
              Add some items to your cart before checking out.
            </span>
            <Link to={"/products"}>
              <Button size={"lg"} className="cursor-pointer my-8 rounded-md">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (type === "profile-view-recent-order-empty-section") {
    return (
      <div className="my-16 flex flex-col items-center justify-center gap-3">
        <div className="h-16 w-16 p-4 bg-muted rounded-full flex items-center justify-center">
          <ShoppingBag size={30} className="text-lg text-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">No orders yet</span>
        <Link to={"/products"}>
          <Button className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }
  if (type === "wishlist-view-empty-section") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-3">
        <div className="h-20 w-20 p-4 bg-card/50 rounded-full flex items-center justify-center">
          <Heart className="h-12 w-12 text-muted-foreground" />
        </div>
        <h4 className="text-2xl text-primary pt-2">Your wishlist is Empty</h4>
        <span className="text-sm text-muted-foreground text-center max-w-md">
          Save items you love by clicking the heart icon on products
        </span>
        <Link to={"/products"}>
          <Button size={"lg"} className="cursor-pointer my-8 rounded-md">
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  return <div>EmptyState</div>;
};

export default EmptyState;
