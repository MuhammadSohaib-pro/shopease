import RecentOrders from "@/components/profile/RecentOrders";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbBackIcon,
} from "@/components/ui/breadcrumb";
import type { RootState } from "@/store/store";
import { ChevronRight, Heart, Package, User } from "lucide-react";
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
              <Link to="/">Back to Home</Link>
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
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
