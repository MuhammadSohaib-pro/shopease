import ProductCard from "../../components/product/ProductCard";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from "lucide-react";

const Product = () => {
  return (
    <div>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-primary text-4xl font-bold">All Products</h1>
          <p className="text-muted-foreground my-2">20 products</p>
          <div className="bg-card w-full p-4 shadow my-8 rounded-md flex flex-col md:flex-row gap-4">
            <div className=" flex-1">
              <input
                type="email"
                className="py-2 rounded-sm pl-3 bg-muted w-full md:w-fit border border-border outline-none focus:ring-1 focus:ring-ring"
                placeholder="Search Products..."
              />
            </div>
            <div className=" flex flex-wrap items-center gap-3">
              <Select>
                <SelectTrigger className="w-full sm:w-40 cursor-pointer">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="jewelery">Jewelery</SelectItem>
                  <SelectItem value="men's clothing">Men's Clothing</SelectItem>
                  <SelectItem value="Women's clothing">
                    Women's Clothing
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-35 cursor-pointer">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className=" rounded-md hidden sm:flex items-center justify-evenly gap-2 border border-border">
                <Button size={"icon"} variant={"ghost"} className="rounded-md">
                  <Grid3X3 />
                </Button>
                <Button size={"icon"} variant={"ghost"} className="rounded-md">
                  <LayoutGrid />
                </Button>
              </div>
              <Button variant={"ghost"} className="rounded-md">
                <X />
                Clear
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="flex items-center gap-2 rounded-full  pl-3 bg-accent/40">
              asbdcds{" "}
              <Button className="p-0 cursor-pointer bg-transparent text-primary rounded-full hover:bg-accent/50">
                <X className="h-1 w-1" />
              </Button>
            </span>
            <span className="flex items-center gap-2 rounded-full  pl-3 bg-accent/40">
              asbdcds{" "}
              <Button className="p-0 cursor-pointer bg-transparent text-primary rounded-full hover:bg-accent/50">
                <X className="h-1 w-1" />
              </Button>
            </span>
          </div>
          {/* <div className="py-12 flex flex-col items-center justify-center gap-3">
            <span className="text-base text-primary">No products found</span>
            <span className="text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you're looking
              for.
            </span>
            <Button className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background">
              Clear Filters
            </Button>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 pb-5">
            {/* {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))} */}
            {[...Array(20)].map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
