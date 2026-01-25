import { Link } from "react-router-dom";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/store/products/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { toggleWishlist } from "@/store/wishlist/WishlistSlice";
import type React from "react";
import { addtoCart } from "@/store/cart/CartSlice";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { wishlist } = useSelector((state: RootState) => state.wishlist);

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addtoCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }),
    );
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="rounded-md shadow-xl group ">
        <div className="relative flex justify-center">
          <img
            src={product.image ?? "https://picsum.photos/400/400"}
            alt={product.title ?? ""}
            className="relative object-contain rounded-t-md w-full h-80"
          />
          <Button
            onClick={handleAddToCart}
            className="cursor-pointer bg-primary text-primary-foreground group-hover:opacity-100 opacity-0 group-hover:transition-opacity group-hover:duration-500 rounded-md w-4/5 px-4 py-2 flex justify-center items-center gap-2 absolute bottom-5"
          >
            <ShoppingBag className="text-primary-foreground h-4 w-4" />
            Add to cart
          </Button>
          <Button
            size={"icon"}
            onClick={handleToggleWishlist}
            className={`cursor-pointer ${isInWishlist(product.id) ? "bg-primary" : "bg-background hover:bg-background group-hover:opacity-100 opacity-0 group-hover:transition-opacity group-hover:duration-500"} rounded-full absolute right-5 top-5`}
          >
            <Heart
              className={`${isInWishlist(product.id) ? "fill-primary-foreground" : "text-primary"} h-4 w-4`}
            />
          </Button>
        </div>
        <div className="bg-background rounded-b-md p-4">
          <span className="text-accent text-sm">
            {formatCategory(product.category ?? "Men's Clothing")}
          </span>
          <h3 className="text-primary py-2 group-hover:text-accent truncate line-clamp-1">
            {product.title ?? "Mens Casual Premium Slim Fit T-Shirts"}
          </h3>
          <div className="flex items-center justify-between">
            <h4 className="text-primary text-2xl font-bold">
              ${product.price.toFixed(2) ?? 100.95}
            </h4>
            <div className="flex items-center justify-center gap-2">
              <Star className="text-accent h-4 w-4 fill-accent" />
              <p className="text-muted-foreground text-sm">
                {product.rating.rate ?? "4.1"} ({product.rating.count ?? "100"})
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
