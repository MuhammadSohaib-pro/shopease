import EmptyState from "@/components/common/EmptyState";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import type { AppDispatch, RootState } from "@/store/store";
import { clearWishlist } from "@/store/wishlist/WishlistSlice";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const WishlistView = () => {
  const dispacth = useDispatch<AppDispatch>();
  const { wishlist } = useSelector((state: RootState) => state.wishlist);
  const handleClearAll = (e: React.MouseEvent) => {
    e.preventDefault();
    dispacth(clearWishlist());
  };
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-4xl font-bold mt-3 mb-5">
            My Wishlist
          </h1>
          {wishlist.length > 0 && (
            <Button
              variant={"ghost"}
              onClick={handleClearAll}
              className="rounded-md"
            >
              <X />
              Clear Wishlist
            </Button>
          )}
        </div>
        {wishlist.length === 0 ? (
          <EmptyState type="wishlist-view-empty-section" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 pb-5">
            {wishlist.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistView;
