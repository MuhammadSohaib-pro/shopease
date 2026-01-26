import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from "lucide-react";
import { Button } from "../ui/button";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import type { GridSize, SortOption } from "@/views/product/Product";
import type { Dispatch, SetStateAction } from "react";

const ProductFilters = ({
  localSearch,
  setLocalSearch,
  selectedCategory,
  handleCategoryChange,
  sortBy,
  setSortBy,
  setGirdSize,
  hasFilters,
  clearFilters,
  searchQuery,
  handleClearSearchFilter,
}: {
  localSearch: string;
  setLocalSearch: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  sortBy: SortOption;
  setSortBy: Dispatch<SetStateAction<SortOption>>;
  setGirdSize: Dispatch<SetStateAction<GridSize>>;
  hasFilters: string;
  clearFilters: () => void;
  searchQuery: string;
  handleClearSearchFilter: () => void;
  handleCategoryChange: (category: string) => void;
}) => {
  const { categories, categoriesLoader } = useSelector(
    (state: RootState) => state.product,
  );
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  return (
    <>
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
                onClick={handleClearSearchFilter}
                className="p-0 cursor-pointer bg-transparent text-primary rounded-full hover:bg-accent/50"
              >
                <X className="h-1 w-1" />
              </Button>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default ProductFilters;
