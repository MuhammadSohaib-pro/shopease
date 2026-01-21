import { Link } from "react-router-dom";
import heroBanner from "../../assets/img/hero-banner.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] min-h-150 flex items-center overflow-hidden">
      <div className="absolute inset-0 ">
        <img src={heroBanner} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/40 to-primary/70"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <span className="px-3 py-2 rounded-full bg-accent/20 text-accent font-bold">
            New Season Arrivals
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground my-6">
            Discover Your <span className="text-accent">Perfect Style</span>
          </h1>
          <p className="text-muted text-lg md:text-xl">
            Explore our curated collection of premium products. Quality meets
            style in every piece.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <Link to={""} className="">
              <Button className="cursor-pointer bg-accent hover:bg-accent/90 rounded-md px-3 md:px-10 py-2 text-accent-foreground hover:text-background">
                Shop Now
              </Button>
            </Link>
            <Link to={""} className="">
              <Button
                variant={"outline"}
                className="cursor-pointer bg-transparent rounded-md px-3 md:px-10 py-2 text-background hover:text-background"
              >
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
