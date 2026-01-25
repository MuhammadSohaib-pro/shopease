import ProductCard from "../../components/product/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "@/store/products/ProductThunk";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import { useSearchParams } from "react-router-dom";
import type { Product } from "@/store/products/ProductSlice";

type SortOption = "default" | "price-asc" | "price-desc" | "rating";
type GridSize = "small" | "large";

const ProductView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [localSearch, setLocalSearch] = useState<string>(
    searchParams.get("search") || "",
  );
  const [gridSize, setGirdSize] = useState<GridSize>("large");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const { products, productLoader, categories, categoriesLoader } = useSelector(
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

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
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
          <div className="bg-card w-full p-4 shadow my-8 rounded-md flex flex-col md:flex-row gap-4">
            <div className=" flex-1">
              <input
                type="email"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="py-2 rounded-sm pl-3 bg-muted w-full md:w-fit border border-border outline-none focus:ring-1 focus:ring-ring"
                placeholder="Search Products..."
              />
            </div>
            <div className=" flex flex-wrap items-center gap-3">
              <Select
                value={selectedCategory || "all"}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full sm:w-40 cursor-pointer">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {!categoriesLoader &&
                    categories.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {formatCategory(category)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value as SortOption)}
              >
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
                <Button
                  size={"icon"}
                  onClick={() => setGirdSize("small")}
                  variant={"ghost"}
                  className="rounded-md"
                >
                  <LayoutGrid />
                </Button>
                <Button
                  size={"icon"}
                  onClick={() => setGirdSize("large")}
                  variant={"ghost"}
                  className="rounded-md"
                >
                  <Grid3X3 />
                </Button>
              </div>
              {hasFilters && (
                <Button
                  variant={"ghost"}
                  onClick={clearFilters}
                  className="rounded-md"
                >
                  <X />
                  Clear
                </Button>
              )}
            </div>
          </div>
          {hasFilters && (
            <div className="flex items-center justify-start gap-2">
              {selectedCategory && (
                <span className="flex items-center gap-2 rounded-full  pl-3 bg-accent/40">
                  {selectedCategory}{" "}
                  <Button
                    onClick={() => handleCategoryChange("all")}
                    className="p-0 cursor-pointer bg-transparent text-primary rounded-full hover:bg-accent/50"
                  >
                    <X className="h-1 w-1" />
                  </Button>
                </span>
              )}
              {searchQuery && (
                <span className="flex items-center gap-2 rounded-full  pl-3 bg-accent/40">
                  {searchQuery}{" "}
                  <Button
                    onClick={() => {
                      setLocalSearch("");
                      const newParams = new URLSearchParams(searchParams);
                      newParams.delete("search");
                      setSearchParams(newParams);
                    }}
                    className="p-0 cursor-pointer bg-transparent text-primary rounded-full hover:bg-accent/50"
                  >
                    <X className="h-1 w-1" />
                  </Button>
                </span>
              )}
            </div>
          )}
          {productLoader ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${gridSize === "small" ? "lg:grid-cols-4" : "lg:grid-cols-5"} gap-4 md:gap-6 pt-10 pb-5`}
            >
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filterProducts?.length == 0 ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3">
              <span className="text-base text-primary">No products found</span>
              <span className="text-sm text-muted-foreground">
                Try adjusting your search or filter to find what you're looking
                for.
              </span>
              <Button className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background">
                Clear Filters
              </Button>
            </div>
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
