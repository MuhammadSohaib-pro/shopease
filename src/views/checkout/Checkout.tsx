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
import { CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
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
              <form className="mt-5 space-y-4">
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
                        placeholder="Doe"
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
                      placeholder="john@example.com"
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
                      placeholder="123 Main Street"
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
                        placeholder="New York"
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
                        placeholder="10001"
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
            <div className="flex items-center justify-start gap-4 my-2">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="object-cover h-20 w-20 rounded-md"
              />
              <div className="flex flex-col items-start gap-1">
                <span className="text-primary text-sm line-clamp-1">
                  Mens Casual Premium Slim Fit T-Shirts
                </span>
                <span className="text-muted-foreground text-sm">Qty: 1</span>
                <span className="text-primary text-sm font-medium">$30.99</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 border-t pt-5">
              <span className="text-muted-foreground text-base">Subtotal</span>
              <span className="text-primary text-base">$160.23</span>
            </div>
            <div className="flex items-center justify-between my-2">
              <span className="text-muted-foreground text-base">Shipping</span>
              <span className="text-success text-base">Free</span>
            </div>
            <div className="flex items-center justify-between border-b pb-5">
              <span className="text-muted-foreground text-base">Tax</span>
              <span className="text-primary text-base">$10.00</span>
            </div>
            <div className="flex items-center justify-between pt-3 mb-2">
              <span className="text-primary text-xl font-bold">Total</span>
              <span className="text-primary text-xl font-bold">$170.23</span>
            </div>
            <Link to={"/checkout"}>
              <Button size={"lg"} className="my-2 w-full">
                Place Order
              </Button>
            </Link>
            <p className="text-sm text-center text-muted-foreground mt-3">
              Secure checkout powered by ShopEase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
