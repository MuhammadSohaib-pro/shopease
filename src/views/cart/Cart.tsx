import CartOrderSummary from "@/components/cart/CartOrderSummary";
import EmptyState from "@/components/common/EmptyState";
import ProductTile from "@/components/product/ProductTile";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/store/cart/CartSlice";
import type { AppDispatch, RootState } from "@/store/store";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
const CartView = () => {
  const dispacth = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.cart);
  const totalAmount: number = useMemo(() => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price * current.quantity,
      0,
    );
  }, [items]);
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        {items.length === 0 ? (
          <EmptyState type="cart-view-empty-section" />
        ) : (
          <>
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-primary text-4xl font-bold">Shopping Cart</h1>
              <Button
                variant={"ghost"}
                onClick={() => dispacth(clearCart())}
                className="hover:text-primary-foreground text-destructive"
              >
                Clear Cart
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <ProductTile item={item} />
                ))}
              </div>
              <div className="lg:col-span-1 w-full">
                <CartOrderSummary totalAmount={totalAmount} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartView;
