import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Truck } from "lucide-react";
import type { FormEventHandler } from "react";

const ShippingInformation = ({
  handleSubmit,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
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
              <FieldLabel className="text-sm" htmlFor="input-field-first-name">
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
              <FieldLabel className="text-sm" htmlFor="input-field-last-name">
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
            <FieldLabel className="text-sm" htmlFor="input-field-address">
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
              <FieldLabel className="text-sm" htmlFor="input-field-city">
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
  );
};

export default ShippingInformation;
