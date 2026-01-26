import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";
import PaymentDetail from "@/components/checkout/PaymentDetail";
import ShippingInformation from "@/components/checkout/ShippingInformation";
import EmptyState from "@/components/common/EmptyState";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbBackIcon,
} from "@/components/ui/breadcrumb";
import { clearCart } from "@/store/cart/CartSlice";
import { addOrder } from "@/store/order/OrderSlice";
import type { AppDispatch, RootState } from "@/store/store";
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
    return <EmptyState type="checkout-view-empty-section" />;
  }

  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbBackIcon />
            <BreadcrumbItem>
              <Link to="/cart">Back to Cart</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-primary text-4xl font-bold mt-3 mb-5">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 lg:col-span-2">
            <ShippingInformation handleSubmit={handleSubmit} />
            <PaymentDetail />
          </div>
          <div className="col-span-1 bg-card rounded-md p-6 h-fit">
            <CheckoutOrderSummary
              items={items}
              totalAmount={totalAmount}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
