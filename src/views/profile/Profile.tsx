import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbBackIcon,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import type { RootState } from "@/store/store";
import { ChevronRight, Heart, Package, ShoppingBag, User } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileView = () => {
  const { orders } = useSelector((state: RootState) => state.order);
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbBackIcon />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Back to Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-primary text-4xl font-bold mt-3 mb-5">
          My Account
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 bg-card rounded-md p-6 h-fit">
            <div className="flex items-center gap-2 pb-4 border-b">
              <div className="flex justify-center items-center p-4 rounded-full bg-accent/30">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl text-primary font-bold">Guest User</h3>
                <p className="text-muted-foreground">Shopping as Guest</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 rounded-md hover:bg-muted">
              <div className="flex items-center my-3 gap-2">
                <Package className="text-muted-foreground h-5 w-5" />
                <span className="text-primary font-bold">My Orders</span>
              </div>
              <span className="text-muted-foreground font-bold">
                {orders.length}
              </span>
            </div>
            <Link to={"/wishlist"} className="cursor-pointer">
              <div className="flex items-center justify-between cursor-pointer px-3 rounded-md hover:bg-muted">
                <div className="flex items-center my-3 gap-2">
                  <Heart className="text-muted-foreground h-5 w-5" />
                  <span className="text-primary font-bold">Wishlist</span>
                </div>
                <ChevronRight className="text-muted-foreground h-5 w-5" />
              </div>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-2 bg-card rounded-md p-6 ">
            <h2 className="text-2xl mb-4">Recent Orders</h2>
            {orders.length === 0 ? (
              <div className="my-16 flex flex-col items-center justify-center gap-3">
                <div className="h-16 w-16 p-4 bg-muted rounded-full flex items-center justify-center">
                  <ShoppingBag
                    size={30}
                    className="text-lg text-muted-foreground"
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  No orders yet
                </span>
                <Link to={"/products"}>
                  <Button className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background">
                    Start Shopping
                  </Button>
                </Link>
              </div>
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
                        <span className="text-sm line-clamp-1">
                          {item.title}
                        </span>
                        <span className="text-muted-foreground text-[10px]">
                          Qty: ${item.quantity} x ${item.quantity * item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
