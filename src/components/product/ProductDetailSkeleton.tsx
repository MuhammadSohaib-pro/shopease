const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-8 lg:gap-12">
      <div className="bg-muted-foreground/50 animate-pulse rounded-lg shadow-lg aspect-square w-full"></div>
      <div>
        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-7 w-20"></div>
        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-20 w-full my-2"></div>

        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/50 rounded-md animate-pulse h-7 w-20"></div>
          <div className="bg-muted-foreground/50 rounded-md animate-pulse h-7 w-20"></div>
        </div>
        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-12 w-36 my-5"></div>
        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-48 w-full"></div>
        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-10 w-full my-5"></div>

        <div className="bg-muted-foreground/50 rounded-md animate-pulse h-32 w-full my-5"></div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
