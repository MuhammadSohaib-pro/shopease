import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { RotateCcw, Shield, ShoppingBag, Star, Truck } from "lucide-react";

const ProductDetail = () => {
  return (
    <>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products?category=jewelery">
                    Jewelery
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Fjallraven - Foldsack No. </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-8 lg:gap-12">
            <div className="bg-card rounded-lg shadow-lg aspect-square w-full">
              <img
                src="https://picsum.photos/400/400"
                alt=""
                className="object-cover rounded-lg w-full "
              />
            </div>
            <div>
              <span className="text-accent">Men's Clothing</span>
              <h1 className="line-clamp-1 text-4xl my-2">
                Fjallraven - Foldsack No.
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className={`w-5 h-5 fill-accent text-accent`} />
                  <Star className={`w-5 h-5 fill-accent text-accent`} />
                  <Star className={`w-5 h-5 fill-accent text-accent`} />
                  <Star className={`w-5 h-5 fill-accent text-accent`} />
                  <Star
                    className={`w-5 h-5 fill-muted-foreground/50 text-muted-foreground/50`}
                  />
                </div>
                <span>4.1(259 Reviews)</span>
              </div>
              <h1 className="line-clamp-1 text-3xl my-5">$22.30</h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ea iusto, explicabo nam animi voluptas in ipsam quidem,
                blanditiis laboriosam unde porro. Harum sapiente soluta quaerat,
                repellat, perspiciatis dignissimos assumenda eveniet laudantium
                rerum nisi esse iusto praesentium exercitationem quidem eius
                saepe vero itaque omnis sit neque recusandae repellendus. Ab
                tenetur quod dolore facere molestias soluta.
              </p>
              <Button size={"lg"} variant={"default"} className="w-full my-5">
                <ShoppingBag />
                Add to Cart
              </Button>
              <div className="grid grid-cols-3 my-10 bg-card/80 rounded-lg py-5">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="w-6 h-6 text-accent" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield className="w-6 h-6 text-accent" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="w-6 h-6 text-accent" />
                  <span className="text-sm">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
