import FeaturedProduct from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import Features from "@/components/home/Features.tsx";
import Cookie from "@/components/home/Cookie.tsx";
import TopSoldBookFeatures from "@/components/home/TopSoldBookFeatures.tsx";
import WhyUs from "@/components/home/WhyUs.tsx";
import CTA from "@/components/home/CTA.tsx";
import TopCategories from "@/components/home/TopCategories.tsx";

const App = () => {
  return (
    <div className="App poppins-medium bg-[#f8f8f8]" >
      <Hero />
      <FeaturedProduct />
        <WhyUs/>
        <TopSoldBookFeatures/>
        <TopCategories/>
        <CTA/>

        <Cookie/>
        <Features/>
    </div>
  );
};

export default App;
