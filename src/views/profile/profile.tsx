import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbBackIcon,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Heart, Package, User } from "lucide-react";

const profile = () => {
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
            <div className="flex items-center justify-between">
              <div className="flex items-center my-3 gap-2">
                <Package className="text-muted-foreground h-5 w-5" />
                <span className="text-primary font-bold">Recent Orders</span>
              </div>
              <span className="text-muted-foreground font-bold">3</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center my-3 gap-2">
                <Heart className="text-muted-foreground h-5 w-5" />
                <span className="text-primary font-bold">Wishlist</span>
              </div>
              <ChevronRight className="text-muted-foreground h-5 w-5" />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 bg-card rounded-md p-6 ">
            <h2 className="text-2xl mb-4">Recent Orders</h2>
            {/* 1 */}
            <div className="bg-muted rounded-md p-4 flex items-center gap-2 mb-3">
              <div className="bg-muted-foreground/30 rounded-md p-3">
                <Package className="text-muted-foreground h-8 w-8" />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">
                    Order #12345435
                  </span>
                  <p className="text-muted-foreground">3 items | 1/15/26</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">$120.00</span>
                  <p className="text-accent">Pending</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-muted rounded-md p-4 flex items-center gap-2 mb-3">
              <div className="bg-muted-foreground/30 rounded-md p-3">
                <Package className="text-muted-foreground h-8 w-8" />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">
                    Order #12345435
                  </span>
                  <p className="text-muted-foreground">3 items | 1/15/26</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">$120.00</span>
                  <p className="text-accent">In Transit</p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-muted rounded-md p-4 flex items-center gap-2 mb-3">
              <div className="bg-muted-foreground/30 rounded-md p-3">
                <Package className="text-muted-foreground h-8 w-8" />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">
                    Order #12345435
                  </span>
                  <p className="text-muted-foreground">3 items | 1/15/26</p>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">$120.00</span>
                  <p className="text-accent">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
