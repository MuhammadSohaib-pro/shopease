import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categoryImages: Record<string, string> = {
    electronics:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
    jewelery:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    "men's clothing":
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=400&fit=crop",
    "women's clothing":
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  };
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-4xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground max-w-md text-center">
            Browse our carefully curated categories and find exactly what you're
            looking for.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-square h-75 w-full bg-muted-foreground rounded-md animate-pulse"
              ></div>
            ))} */}

            {Object.entries(categoryImages).map((item, index) => (
              <Link key={index} to={""}>
                <div className="relative shadow-sm group rounded-md overflow-hidden">
                  <img
                    src={item[1]}
                    alt=""
                    className="rounded-md group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
                  />
                  <div className="rounded-md absolute inset-0 bg-primary/50 group-hover:bg-primary/20 transition-all duration-300 ease-in"></div>
                  <h5 className="absolute left-4 bottom-10 text-primary-foreground text-2xl">
                    Electronics
                  </h5>
                  <p className="absolute left-4 bottom-3 text-primary-foreground group-hover:text-accent">
                    Show now
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
