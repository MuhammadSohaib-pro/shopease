import ProductCard from "@/components/product/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Heart,
  RotateCcw,
  Shield,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts, fetchProductById } from "@/store/products/ProductThunk";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import { Link, useParams } from "react-router-dom";
import { addToWishlist } from "@/store/wishlist/WishlistSlice";
import { addtoCart } from "@/store/cart/CartSlice";

const ProductDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0", 10);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductById({ id: productId }));
    dispatch(fetchProducts());
  }, [id]);

  const { products, productLoader, selectedProduct, error } = useSelector(
    (state: RootState) => state.product,
  );
  const { wishlist } = useSelector((state: RootState) => state.wishlist);

  const relatedProducts = products.filter(
    (product) =>
      product.category === selectedProduct?.category &&
      product.id !== productId,
  );

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  const handleAddToWishList = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToWishlist(selectedProduct));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      addtoCart({
        id: selectedProduct?.id,
        title: selectedProduct?.title,
        price: selectedProduct?.price,
        image: selectedProduct?.image,
      }),
    );
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  if (error) {
    return (
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }
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
              {selectedProduct && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/products?category=${encodeURIComponent(selectedProduct?.category ?? "")}`}
                    >
                      {formatCategory(selectedProduct?.category ?? "")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {selectedProduct?.title ?? ""}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-8 lg:gap-12">
            <div className="bg-card rounded-lg shadow-lg">
              <img
                src={selectedProduct?.image ?? ""}
                alt={selectedProduct?.title ?? ""}
                className="object-contain rounded-lg aspect-square w-full"
              />
            </div>
            {selectedProduct && (
              <div>
                <span className="text-accent">
                  {formatCategory(selectedProduct?.category ?? "")}
                </span>
                <h1 className="line-clamp-1 truncate text-4xl my-2">
                  {selectedProduct?.title ?? ""}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(selectedProduct?.rating.rate ?? 4)
                            ? "fill-accent text-accent"
                            : "fill-muted-foreground/50 text-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  <span>
                    {selectedProduct?.rating.rate} (
                    {selectedProduct?.rating.count} Reviews)
                  </span>
                </div>
                <h1 className="line-clamp-1 truncate text-3xl my-5">
                  ${selectedProduct?.price.toFixed(2)}
                </h1>
                <p className="text-muted-foreground">
                  {selectedProduct?.description}
                </p>
                <div className="flex items-center gap-5 w-full">
                  <Button
                    size={"lg"}
                    variant={"default"}
                    onClick={handleAddToCart}
                    className="flex-1 my-5"
                  >
                    <ShoppingBag />
                    Add to Cart
                  </Button>
                  <Button
                    size={"lg"}
                    variant={`${isInWishlist(selectedProduct.id) ? "default" : "outline"}`}
                    onClick={handleAddToWishList}
                    disabled={isInWishlist(selectedProduct.id)}
                    className="my-5"
                  >
                    <Heart
                      className={`${isInWishlist(selectedProduct.id) ? "fill-primary-foreground" : "text-primary"}`}
                    />
                    {isInWishlist(selectedProduct.id)
                      ? "In Wishlist"
                      : "Wishlist"}
                  </Button>
                </div>
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
            )}
          </div>
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 pb-5">
                {productLoader
                  ? [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
                  : relatedProducts.map((product, i) => (
                      <ProductCard key={i} product={product} />
                    ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
