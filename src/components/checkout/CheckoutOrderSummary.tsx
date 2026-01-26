import { Button } from "../ui/button";
import type { CartItem } from "@/store/cart/CartSlice";

const CheckoutOrderSummary = ({
  items,
  totalAmount,
  isSubmitting,
}: {
  items: CartItem[];
  totalAmount: number;
  isSubmitting: boolean;
}) => {
  return (
    <>
      <h2 className="text-2xl">Order Summary</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-start gap-4 my-2"
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-contain aspect-square h-20 w-20 rounded-md"
          />
          <div className="flex flex-col items-start gap-1">
            <span className="text-primary text-sm truncate text-wrap line-clamp-1 w-full">
              {item.title}
            </span>
            <span className="text-muted-foreground text-sm">
              Qty: {item.quantity}
            </span>
            <span className="text-primary text-sm font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-5 border-t pt-5">
        <span className="text-muted-foreground text-base">Subtotal</span>
        <span className="text-primary text-base">
          ${totalAmount.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between my-2">
        <span className="text-muted-foreground text-base">Shipping</span>
        <span className="text-success text-base">Free</span>
      </div>
      <div className="flex items-center justify-between border-b pb-5">
        <span className="text-muted-foreground text-base">Tax</span>
        <span className="text-primary text-base">
          ${(totalAmount * 0.1).toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between pt-3 mb-2">
        <span className="text-primary text-xl font-bold">Total</span>
        <span className="text-primary text-xl font-bold">
          ${(totalAmount + totalAmount * 0.1).toFixed(2)}
        </span>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size={"lg"}
        form="shipping-info"
        className="cursor-pointer my-2 w-full"
      >
        {isSubmitting ? "Processing" : "Place Order"}
      </Button>
      <p className="text-sm text-center text-muted-foreground mt-3">
        Secure checkout powered by ShopEase
      </p>
    </>
  );
};

export default CheckoutOrderSummary;
