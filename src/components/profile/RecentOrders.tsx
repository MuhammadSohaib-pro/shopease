import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import EmptyState from "../common/EmptyState";
import { Package } from "lucide-react";

const RecentOrders = () => {
  const { orders } = useSelector((state: RootState) => state.order);

  return (
    <>
      <h2 className="text-2xl mb-4">Recent Orders</h2>
      {orders.length === 0 ? (
        <EmptyState type="profile-view-recent-order-empty-section" />
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col items-start bg-muted rounded-md p-4 mb-3"
          >
            <div
              key={order.id}
              className=" flex items-center gap-2 pb-2 mb-2 w-full border-b border-primary/30"
            >
              <div className="bg-muted-foreground/30 rounded-md p-3 ">
                <Package className="text-muted-foreground h-8 w-8" />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">
                    Order #{order.id}
                  </span>
                  <p className="text-muted-foreground">
                    {order.items.length} items |{" "}
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-primary font-bold">
                    ${order.total.toFixed(2)}
                  </span>
                  <p className="text-accent">{order.status}</p>
                </div>
              </div>
            </div>
            {order.items.map((item) => (
              <div
                key={item.id}
                className=" flex items-center gap-2 mb-2 w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-10 object-contain aspect-square"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm line-clamp-1">{item.title}</span>
                  <span className="text-muted-foreground text-[10px]">
                    Qty: ${item.quantity} x ${item.quantity * item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </>
  );
};

export default RecentOrders;
