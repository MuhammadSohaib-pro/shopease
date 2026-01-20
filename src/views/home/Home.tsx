import CategoriesSection from "../../components/home/CategoriesSection";
import CTASection from "../../components/home/CTASection";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import FeaturesSection from "../../components/home/FeaturesSection";
import HeroSection from "../../components/home/HeroSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Categories Section */}
      <CategoriesSection />
      {/* Featured Products Section */}
      <FeaturedProducts />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
