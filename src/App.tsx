import FeaturedProduct from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";
import Features from "@/components/home/Features.tsx";

const App = () => {
  return (
    <div className="App poppins-medium bg-[#f8f8f8]" >
      <Hero />
      <FeaturedProduct />
        <Features/>
    </div>
  );
};

export default App;
