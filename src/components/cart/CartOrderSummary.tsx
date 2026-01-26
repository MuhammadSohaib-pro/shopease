import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CartOrderSummary = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <div className="bg-card rounded-md p-5 card-shadow hover:card-shadow-hover sticky top-24">
      <h2 className="text-2xl mb-5">Order Summary</h2>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-base">Subtotal</span>
        <span className="text-primary text-base">
          ${totalAmount.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between my-2">
        <span className="text-muted-foreground text-base">Shipping</span>
        <span className="text-success text-base">Free</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-base">Tax</span>
        <span className="text-primary text-base">
          ${(totalAmount * 0.1).toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between pt-3 my-2 border-t">
        <span className="text-primary text-xl font-bold">Total</span>
        <span className="text-primary text-xl font-bold">
          ${(totalAmount * 0.1 + totalAmount).toFixed(2)}
        </span>
      </div>
      <Link to={"/checkout"}>
        <Button size={"lg"} className="my-2 w-full">
          Proceed to Checkout
          <ArrowRight />
        </Button>
      </Link>
      <Link to={"/products"}>
        <Button
          size={"lg"}
          variant={"outline"}
          className="my-2 bg-transparent w-full"
        >
          Continue Shopping
        </Button>
      </Link>
      <p className="text-sm text-center text-muted-foreground mt-3">
        Secure checkout powered by ShopEase
      </p>
    </div>
  );
};

export default CartOrderSummary;
