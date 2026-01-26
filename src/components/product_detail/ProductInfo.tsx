import {
  Heart,
  RotateCcw,
  Shield,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { Product } from "@/store/products/ProductSlice";

const ProductInfo = ({
  selectedProduct,
  handleAddToCart,
  handleAddToWishList,
}: {
  selectedProduct: Product | null;
  handleAddToCart: (e: React.MouseEvent<Element, MouseEvent>) => void;
  handleAddToWishList: (e: React.MouseEvent<Element, MouseEvent>) => void;
}) => {
  const { wishlist } = useSelector((state: RootState) => state.wishlist);

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  return (
    <>
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
              {selectedProduct?.rating.rate} ({selectedProduct?.rating.count}{" "}
              Reviews)
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
              {isInWishlist(selectedProduct.id) ? "In Wishlist" : "Wishlist"}
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
    </>
  );
};

export default ProductInfo;
