import { Button } from "../ui/button";

const ProductEmptyState = ({ clearFilters }: { clearFilters: () => void }) => {
  return (
    <div className="py-12 flex flex-col items-center justify-center gap-3">
      <span className="text-base text-primary">No products found</span>
      <span className="text-sm text-muted-foreground">
        Try adjusting your search or filter to find what you're looking for.
      </span>
      <Button
        onClick={clearFilters}
        className="cursor-pointer bg-foreground rounded-md px-4 py-2 text-background"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductEmptyState;
