import ProductTile from "@/components/product/ProductTile";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        {/* <div className="h-full w-full flex flex-col items-center justify-center gap-3">
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
        </div> */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-primary text-4xl font-bold">Shopping Cart</h1>
          <Button
            variant={"ghost"}
            className="hover:text-primary-foreground text-destructive"
          >
            Clear Cart
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="bg-card rounded-md p-5 card-shadow hover:card-shadow-hover sticky top-24">
              <h2 className="text-2xl mb-5">Order Summary</h2>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-base">
                  Subtotal
                </span>
                <span className="text-primary text-base">$160.23</span>
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="text-muted-foreground text-base">
                  Shipping
                </span>
                <span className="text-success text-base">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-base">Tax</span>
                <span className="text-primary text-base">$10.00</span>
              </div>
              <div className="flex items-center justify-between pt-3 my-2 border-t">
                <span className="text-primary text-xl font-bold">Total</span>
                <span className="text-primary text-xl font-bold">$170.23</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
