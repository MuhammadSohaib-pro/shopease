import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <div className="hero-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-primary-foreground text-4xl font-bold">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground max-w-lg text-center">
            Subscribe and get 10% off your first order. Plus, stay updated on
            new arrivals and exclusive offers.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full md:w-lg py-5">
            <input
              type="email"
              className="py-2  rounded-sm pl-3 w-full bg-muted-foreground placeholder:text-border border border-border outline-none focus:ring-1 focus:ring-ring"
              placeholder="Enter your email"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-fit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
