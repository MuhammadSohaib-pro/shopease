import ProductSkeleton from "../product/ProductSkeleton";
import ProductCard from "../product/ProductCard";
import type { Product } from "@/store/products/ProductSlice";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) => {
  const { productLoader } = useSelector((state: RootState) => state.product);
  return (
    <>
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
    </>
  );
};

export default RelatedProducts;
