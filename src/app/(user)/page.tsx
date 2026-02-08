import Hero from "@/components/home/hero";
import FeaturedCategories from "@/components/home/featured-categories";
import FeaturedProducts from "@/components/home/featured-products";
import TrustFeatures from "@/components/home/trust-features";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <FeaturedCategories />
      <FeaturedProducts /><TrustFeatures />
    </div>
  );
}

