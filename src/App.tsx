import FeaturedProduct from "./components/home/FeaturedProduct";
import Hero from "./components/home/Hero";

const App = () => {
  return (
    <div className="App poppins-medium bg-[#f8f8f8]" >
      <Hero />
      <FeaturedProduct />
    </div>
  );
};

export default App;
