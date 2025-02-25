import FeaturedProduct from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import Features from "@/components/home/Features.tsx";
import Cookie from "@/components/home/Cookie.tsx";
import TopSoldBookFeatures from "@/components/home/TopSoldBookFeatures.tsx";
import WhyUs from "@/components/home/WhyUs.tsx";
import CTA from "@/components/home/CTA.tsx";
import TopCategories from "@/components/home/TopCategories.tsx";
import TopPopularBooks from "@/components/home/TopPopularBooks.tsx";
import FAQ from "@/components/home/FAQ.tsx";
import Reviews from "@/components/home/Reviews.tsx";
import BackToTop from "@/components/home/BackToTop.tsx";

const App = () => {
  return (
    <div className="App poppins-medium bg-[#f8f8f8]" >
      <Hero />
      <FeaturedProduct />
        <WhyUs/>
        <TopPopularBooks/>
        <TopSoldBookFeatures/>
        <TopCategories/>
        <CTA/>
        <FAQ/>
      <Reviews />

        <Cookie/>
        <Features/>
        <BackToTop/>
    </div>
  );
};

export default App;
