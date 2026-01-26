import ProductCard from "../../components/product/ProductCard";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/products/ProductThunk";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import { useSearchParams } from "react-router-dom";
import type { Product } from "@/store/products/ProductSlice";
import ProductFilters from "@/components/product/ProductFilters";
import ProductEmptyState from "@/components/product/ProductEmptyState";

export type SortOption = "default" | "price-asc" | "price-desc" | "rating";
export type GridSize = "small" | "large";

const ProductView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [localSearch, setLocalSearch] = useState<string>(
    searchParams.get("search") || "",
  );
  const [gridSize, setGirdSize] = useState<GridSize>("large");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const { products, productLoader } = useSelector(
    (state: RootState) => state.product,
  );

  const selectedCategory = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";
  const hasFilters = selectedCategory || searchQuery;

  const filterProducts: Product[] | undefined = useMemo(() => {
    if (!products) return;
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      );
    }
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortBy]);

  const handleClearSearchFilter = () => {
    setLocalSearch("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("search");
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== searchQuery) {
        const newParams = new URLSearchParams(searchParams);
        if (localSearch) {
          newParams.set("search", localSearch);
        } else {
          newParams.delete("search");
        }
        setSearchParams(newParams);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, searchQuery, searchParams, setSearchParams]);

  const clearFilters = () => {
    setSearchParams("");
    setLocalSearch("");
    setSortBy("default");
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-primary text-4xl font-bold">All Products</h1>
          <p className="text-muted-foreground my-2">
            {filterProducts?.length} products
          </p>
          <ProductFilters
            localSearch={localSearch}
            setLocalSearch={setLocalSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            clearFilters={clearFilters}
            handleClearSearchFilter={handleClearSearchFilter}
            hasFilters={hasFilters}
            setGirdSize={setGirdSize}
          />
          {productLoader ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${gridSize === "small" ? "lg:grid-cols-4" : "lg:grid-cols-5"} gap-4 md:gap-6 pt-10 pb-5`}
            >
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filterProducts?.length === 0 ? (
            <ProductEmptyState clearFilters={clearFilters} />
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${gridSize === "small" ? "lg:grid-cols-4" : "lg:grid-cols-5"} gap-4 md:gap-6 pt-10 pb-5`}
            >
              {filterProducts?.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductView;
