import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts, fetchProductById } from "@/store/products/ProductThunk";
import { Link, useParams } from "react-router-dom";
import { addToWishlist } from "@/store/wishlist/WishlistSlice";
import { addtoCart } from "@/store/cart/CartSlice";
import ErrorState from "@/components/product_detail/ErrorState";
import RelatedProducts from "@/components/product_detail/RelatedProducts";
import ProductInfo from "@/components/product_detail/ProductInfo";

const ProductDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0", 10);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductById({ id: productId }));
    dispatch(fetchProducts());
  }, [id]);

  const { products, selectedProduct, error } = useSelector(
    (state: RootState) => state.product,
  );

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

  if (error) {
    return <ErrorState />;
  }
  return (
    <>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/products">Products</Link>
              </BreadcrumbItem>
              {selectedProduct && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link
                      to={`/products?category=${encodeURIComponent(selectedProduct?.category ?? "")}`}
                    >
                      {formatCategory(selectedProduct?.category ?? "")}
                    </Link>
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
            <ProductInfo
              selectedProduct={selectedProduct}
              handleAddToWishList={handleAddToWishList}
              handleAddToCart={handleAddToCart}
            />
          </div>
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
