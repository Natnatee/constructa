import Hero from "@/components/home/hero";
import FeaturedCategories from "@/components/home/featured-categories";
import FeaturedProducts from "@/components/home/featured-products";
import TrustFeatures from "@/components/home/trust-features";
import AboutShortcut from "@/components/home/about-shortcut";
import BrandsSlider from "@/components/home/brands-slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <AboutShortcut />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandsSlider />
      <TrustFeatures />
    </div>
  );
}

