import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ErrorState = () => {
  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorState;
