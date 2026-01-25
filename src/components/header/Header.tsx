import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchCategories } from "@/store/products/ProductThunk";
import { toggleCart } from "@/store/cart/CartSlice";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { categories, categoriesLoader } = useSelector(
    (state: RootState) => state.product,
  );
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setIsSearchOpen(false);
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className="bg-primary w-8 h-8 rounded-sm flex items-center justify-center">
            <h4 className="text-primary-foreground text-lg font-bold">S</h4>
          </div>
          <h4 className="text-xl font-semibold hidden sm:block">ShopEase</h4>
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link to="/">
            <span className="text-primary text-sm">Home</span>
          </Link>
          <Link to="/products">
            <span className="text-primary text-sm">All Products</span>
          </Link>
          <div
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
            className="relative"
          >
            <Button className="text-primary bg-transparent hover:bg-transparent text-sm flex items-center justify-center gap-1 cursor-pointer">
              Categories
              <ChevronDown size={16} className="text-primary text-sm" />
            </Button>

            {isCategoryOpen && !categoriesLoader && (
              <div className="bg-card border border-border rounded-sm mt-2 w-40 absolute flex flex-col items-start shadow-lg top-3">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="py-3 px-4 hover:bg-muted w-full"
                  >
                    <span className="text-primary text-sm">
                      {formatCategory(category)}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {location.pathname !== "/products" && (
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex flex-1 max-w-md"
          >
            <div className="relative w-full">
              <Search
                size={20}
                className="absolute left-2 top-1/4 text-muted-foreground"
              />
              <input
                type="text"
                className="py-2 w-full rounded-md pl-10 bg-muted/50 border-0 outline-none focus:ring-1 focus:ring-ring"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        )}
        <div className="flex items-center gap-4">
          {location.pathname !== "/products" && (
            <Button
              size={"icon"}
              variant={"ghost"}
              className="cursor-pointer md:hidden p-3 rounded"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
          )}
          <Link to="/profile">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="cursor-pointer p-3 rounded"
            >
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => dispatch(toggleCart())}
            className="cursor-pointer p-3 rounded relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs font-medium flex items-center justify-center">
                {items.length}
              </div>
            )}
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="cursor-pointer p-3 rounded lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>
      {
        <div
          className={`md:hidden transition-all duration-300 ease-in overflow-hidden
        ${isSearchOpen ? "max-h-20 opacity-100 p-2" : "max-h-0 opacity-0 p-0"}
        `}
        >
          <form onSubmit={handleSubmit} className="flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search
                size={20}
                className="absolute left-2 top-1/4 text-muted-foreground"
              />
              <input
                type="text"
                className="py-2 w-full rounded-md pl-10 bg-muted/50 border-0 outline-none focus:ring-1 focus:ring-ring"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      }
      {isMenuOpen && (
        <div className="lg:hidden px-3 py-3">
          <div className="flex flex-col  justify-center gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary text-sm hover:font-medium">
                Home
              </span>
            </Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary text-sm hover:font-medium">
                All Products
              </span>
            </Link>
            <span className="text-gray-400 text-sm">Categories</span>
            {!categoriesLoader &&
              categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2"
                >
                  <span className="text-primary text-sm hover:font-medium">
                    {formatCategory(category)}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
