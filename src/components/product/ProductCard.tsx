import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <Link to={""}>
      <div className="rounded-md shadow-xl group ">
        <div className="relative flex justify-center">
          <img
            src="https://picsum.photos/400/400"
            alt=""
            className="relative object-cover rounded-t-md w-full h-80"
          />
          <Button className="cursor-pointer bg-primary text-primary-foreground group-hover:opacity-100 opacity-0 group-hover:transition-opacity group-hover:duration-500 rounded-md w-4/5 px-4 py-2 flex justify-center items-center gap-2 absolute bottom-5">
            <ShoppingBag className="text-primary-foreground h-4 w-4" />
            Add to cart
          </Button>
        </div>
        <div className="bg-background rounded-b-md p-4">
          <span className="text-accent text-sm">Men's Clothing</span>
          <h3 className="text-primary py-2 group-hover:text-accent line-clamp-2">
            View All Products View All Products View All Products
          </h3>
          <div className="flex items-center justify-between">
            <h4 className="text-primary text-2xl font-bold">$100.95</h4>
            <div className="flex items-center justify-center gap-2">
              <Star className="text-accent h-4 w-4 fill-accent" />
              <p className="text-muted-foreground text-sm">4.1 (100)</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
