const ProductSkeleton = () => {
  return (
    <>
      <div className="rounded-md shadow-xl group bg-muted-foreground/50">
        <div className="w-full h-80 animate-pulse"></div>
        <div className="bg-muted/50 rounded-b-md p-4">
          <div className="bg-muted/80 h-4 w-20 animate-pulse my-2"></div>
          <div className="bg-muted/80 h-8 w-full animate-pulse my-2"></div>

          <div className="flex items-center justify-between">
            <div className="bg-muted/80 h-8 w-20 animate-pulse"></div>
            <div className="bg-muted/80 h-8 w-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
