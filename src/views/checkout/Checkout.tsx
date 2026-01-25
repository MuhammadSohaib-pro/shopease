import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbBackIcon,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { clearCart } from "@/store/cart/CartSlice";
import { addOrder } from "@/store/order/OrderSlice";
import type { AppDispatch, RootState } from "@/store/store";
import { CreditCard, Truck } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckoutView = () => {
  const dispacth = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.cart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalAmount: number = useMemo(() => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price * current.quantity,
      0,
    );
  }, [items]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newOrder = {
      id: `SE${Date.now().toString().slice(-6)}`,
      items: [...items],
      date: new Date().toISOString(),
      // Price with tax
      total: totalAmount + totalAmount * 0.1,
      status: "Processing",
      shippingInfo: {
        firstName: formData.get("firstName")?.toString(),
        lastName: formData.get("lastName")?.toString(),
        email: formData.get("email")?.toString(),
        address: formData.get("address")?.toString(),
        city: formData.get("city")?.toString(),
        zip: formData.get("zip")?.toString(),
      },
    };
    dispacth(addOrder(newOrder));
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Order placed successfully!");
    dispacth(clearCart());
    navigate(`/order-success?orderId=${encodeURIComponent(newOrder.id)}`);
    setIsSubmitting(false);
  };
  if (items.length === 0) {
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

  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbBackIcon />
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart">Back to Cart</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-primary text-4xl font-bold mt-3 mb-5">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 lg:col-span-2">
            <div className=" bg-card rounded-md p-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
                  <Truck className="text-lg text-accent" />
                </div>
                <h2 className="text-2xl">Shipping Information</h2>
              </div>
              <form
                onSubmit={handleSubmit}
                id="shipping-info"
                className="mt-5 space-y-4"
              >
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 ">
                  <div className="w-full">
                    <Field>
                      <FieldLabel
                        className="text-sm"
                        htmlFor="input-field-first-name"
                      >
                        First Name
                      </FieldLabel>
                      <Input
                        id="input-field-first-name"
                        type="text"
                        className="bg-muted/50"
                        placeholder="John"
                        name="firstName"
                        required
                      />
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field>
                      <FieldLabel
                        className="text-sm"
                        htmlFor="input-field-last-name"
                      >
                        Last Name
                      </FieldLabel>
                      <Input
                        id="input-field-last-name"
                        type="text"
                        className="bg-muted/50"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </Field>
                  </div>
                </div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-sm" htmlFor="input-field-email">
                      Email
                    </FieldLabel>
                    <Input
                      id="input-field-email"
                      type="email"
                      className="bg-muted/50"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </Field>
                </div>
                <div className="w-full">
                  <Field>
                    <FieldLabel
                      className="text-sm"
                      htmlFor="input-field-address"
                    >
                      Address
                    </FieldLabel>
                    <Input
                      id="input-field-address"
                      type="text"
                      className="bg-muted/50"
                      name="address"
                      placeholder="123 Main Street"
                      required
                    />
                  </Field>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 ">
                  <div className="w-full">
                    <Field>
                      <FieldLabel
                        className="text-sm"
                        htmlFor="input-field-city"
                      >
                        City
                      </FieldLabel>
                      <Input
                        id="input-field-city"
                        type="text"
                        className="bg-muted/50"
                        name="city"
                        placeholder="New York"
                        required
                      />
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field>
                      <FieldLabel className="text-sm" htmlFor="input-field-zip">
                        ZIP Code
                      </FieldLabel>
                      <Input
                        id="input-field-zip"
                        type="text"
                        className="bg-muted/50"
                        name="zip"
                        placeholder="10001"
                        required
                      />
                    </Field>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-5 bg-card rounded-md p-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
                  <CreditCard className="text-lg text-accent" />
                </div>
                <h2 className="text-2xl">Payment Method</h2>
              </div>
              <form className="mt-5 space-y-4">
                <div className="w-full">
                  <Field>
                    <FieldLabel
                      className="text-sm"
                      htmlFor="input-field-card-number"
                    >
                      Card Number
                    </FieldLabel>
                    <Input
                      id="input-field-card-number"
                      type="text"
                      className="bg-muted/50"
                      placeholder="1234 5678 9012 3456"
                    />
                  </Field>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 ">
                  <div className="w-full">
                    <Field>
                      <FieldLabel
                        className="text-sm"
                        htmlFor="input-field-expiry-date"
                      >
                        Expiry Date
                      </FieldLabel>
                      <Input
                        id="input-field-expiry-date"
                        type="text"
                        className="bg-muted/50"
                        placeholder="MM/YY"
                      />
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field>
                      <FieldLabel className="text-sm" htmlFor="input-field-cvv">
                        CVV
                      </FieldLabel>
                      <Input
                        id="input-field-cvv"
                        type="text"
                        className="bg-muted/50"
                        placeholder="123"
                      />
                    </Field>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1 bg-card rounded-md p-6 h-fit">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
