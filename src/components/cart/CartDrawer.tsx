import { useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductTile from "../product/ProductTile";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(() => setIsOpen(false));
  return (
    isOpen && (
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-xs z-50">
        <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col">
          {/* header */}
          <div className="flex items-center justify-between p-4 border-b border-muted">
            <div className="flex items-center justify-start gap-1">
              <ShoppingBag className="text-sm text-primary" />
              <h3 className="text-lg text-primary">Your Cart</h3>
              <span className="text-base text-muted-foreground">(0 items)</span>
            </div>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="cursor-pointer p-3 rounded-full hover:bg-accent"
            >
              <X />
            </Button>
          </div>
          {/* empty cart */}
          {/* <div className="h-full w-full flex flex-col items-center justify-center gap-3">
            <div className="h-16 w-16 p-4 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag
                size={30}
                className="text-lg text-muted-foreground"
              />
            </div>
            <span className="text-base text-primary">Your cart is empty</span>
            <span className="text-sm text-muted-foreground">
              Start shopping to add items to your cart
            </span>
            <Link to={"/products"}>
              <Button className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background">
                Browse Product
              </Button>
            </Link>
          </div> */}
          <div className="p-3 h-full w-full">
            <ProductTile />
          </div>

          <div className="p-3 border-t-2 border-muted flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-between w-full">
              <span className="text-primary text-lg">Total</span>
              <h3 className="text-primary text-xl">$22.30</h3>
            </div>

            <div className="flex items-center gap-2 w-full py-4">
              <Link to={""} className="w-full">
                <Button
                  variant={"outline"}
                  className="cursor-pointer w-full bg-transparent outline-2 outline-muted rounded-md px-4 py-2 text-primary"
                >
                  View Cart
                </Button>
              </Link>
              <Link to={""} className="w-full">
                <Button className="cursor-pointer w-full bg-primary rounded-md px-4 py-2 text-background">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartDrawer;
