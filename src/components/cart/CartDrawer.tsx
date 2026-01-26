import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductTile from "../product/ProductTile";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { toggleCart } from "@/store/cart/CartSlice";
import { useMemo } from "react";
import EmptyState from "../common/EmptyState";

const CartDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const totalAmount: number = useMemo(() => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price * current.quantity,
      0,
    );
  }, [items]);
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
              onClick={() => dispatch(toggleCart())}
              className="cursor-pointer p-3 rounded-full hover:bg-accent"
            >
              <X />
            </Button>
          </div>
          {items.length === 0 ? (
            <EmptyState type="cart-drawer-empty-section" />
          ) : (
            <>
              <div className="p-3 h-full w-full overflow-y-scroll">
                {items.map((item) => {
                  return <ProductTile key={item.id} item={item} />;
                })}
              </div>

              <div className="p-3 border-t-2 border-muted flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-primary text-lg">Total</span>
                  <h3 className="text-primary text-xl">
                    ${(totalAmount * 0.1 + totalAmount).toFixed(2)}
                  </h3>
                </div>

                <div className="flex items-center gap-2 w-full py-4">
                  <Link to={"/cart"} className="w-full">
                    <Button
                      variant={"outline"}
                      onClick={() => dispatch(toggleCart())}
                      className="cursor-pointer w-full bg-transparent outline-2 outline-muted rounded-md px-4 py-2 text-primary"
                    >
                      View Cart
                    </Button>
                  </Link>
                  <Link to={"/checkout"} className="w-full">
                    <Button
                      onClick={() => dispatch(toggleCart())}
                      className="cursor-pointer w-full bg-primary rounded-md px-4 py-2 text-background"
                    >
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default CartDrawer;
