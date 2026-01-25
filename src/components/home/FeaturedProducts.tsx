import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import { Button } from "@/components/ui/button";
import ProductSkeleton from "../product/ProductSkeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/products/ProductThunk";

const FeaturedProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { products, productLoader } = useSelector(
    (state: RootState) => state.product,
  );

  const filterProducts = products?.slice(0, 8) || [];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl font-bold">Featured Products</h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pt-2">
          <p className="text-muted-foreground">
            Browse our carefully curated categories and find exactly what you're
            looking for.
          </p>
          <Link to={"/products"} className="">
            <Button className="bg-muted hover:bg-accent cursor-pointer text-primary hover:text-background rounded px-3 py-2 border border-border">
              View All Products
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 pb-5">
          {productLoader
            ? [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
            : filterProducts.map((product, i) => <ProductCard key={i} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
