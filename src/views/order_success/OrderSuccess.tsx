import { Button } from "@/components/ui/button";
import type { RootState } from "@/store/store";
import { ArrowRight, CheckCircle, Package } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const OrderSuccessView = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { orders } = useSelector((state: RootState) => state.order);
  const currentOrder = orders.find((item) => item.id === orderId);
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5">
          <div className="flex justify-center items-center p-5 rounded-full bg-success/30">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-primary text-4xl font-bold">
            Order Placed Summary
          </h1>
          <p className="text-muted-foreground text-sm text-center max-w-md">
            Thank you for your purchase. We've sent a confirmation email with
            your order details.
          </p>
          <div className="bg-card rounded-md py-4 flex flex-col items-center gap-2 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-accent " />
              <span className="text-primary font-bold">Order #{orderId}</span>
            </div>
            <div className="flex flex-col p-4 my-2 border-y w-full">
              <span className=" text-primary font-semibold mb-2">
                Item's Ordered:
              </span>
              {currentOrder?.items.map((item) => (
                <div className="flex items-center justify-between w-full">
                  <span className="text-muted-foreground text-sm truncate text-nowrap line-clamp-1 w-52">
                    {item.title}
                  </span>
                  <span className="text-primary text-sm">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Estimated delivery: 3-5 business days
            </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <Link to={"/products"} className="">
              <Button className="cursor-pointer bg-primary rounded-md px-4 py-2 text-background">
                Continue Shopping
                <ArrowRight />
              </Button>
            </Link>
            <Link to={"/profile"} className="">
              <Button
                variant={"outline"}
                className="cursor-pointer bg-transparent border border-primary hover:border-accent rounded-md px-4 py-2 text-primary"
              >
                View Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessView;
