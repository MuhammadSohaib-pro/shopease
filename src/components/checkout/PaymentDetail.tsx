import { CreditCard } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const PaymentDetail = () => {
  return (
    <div className="mt-5 bg-card rounded-md p-6">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
          <CreditCard className="text-lg text-accent" />
        </div>
        <h2 className="text-2xl">Payment Detail</h2>
      </div>
      <form className="mt-5 space-y-4">
        <div className="w-full">
          <Field>
            <FieldLabel className="text-sm" htmlFor="input-field-card-number">
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
              <FieldLabel className="text-sm" htmlFor="input-field-expiry-date">
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
  );
};

export default PaymentDetail;
