
import GltfViewerHome from "@/components/home/GltfViewerHome.tsx";



const Hero = () => {
  return (
      <div className="container mx-auto relative py-8 overflow-hidden sm:py-8 lg:py-2">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24">

            {/* Text and Button Section - Left Side */}
            <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-[#04345c]">Read books to know more </p>

              <h1 className="mt-5 text-3xl uppercase font-bold text-[#04345c] lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight">
                Learn to earn 💰 <br/> without losing time.
              </h1>

              <div className="mt-10 lg:mt-14">
                <p className="text-base font-bold text-[#04345c]">Get your free chapter now</p>
                <form className="mt-4 lg:mt-5">
                  <div>
                    <input
                        type="email"
                        placeholder="Email where we'll send the book"
                        className="w-2/3 px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all  outline-none  font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white  border-[#04345c]/70 "
                    />
                  </div>
                  <button
                      className="w-2/3 mt-3 px-8 py-3 text-base font-bold text-white bg-[#04345c] rounded-3xl hover:bg-[#048ed6] transition-all duration-200">
                    Get it now
                  </button>
                </form>
              </div>
            </div>

            {/* Image Section - Right Side */}
            <div className="relative">
              <div className="relative  w-full h-[600px]">
                <GltfViewerHome
                    fileUrl="/books.glb"
                    scale={[0.15, 0.15, 0.15]}
                    position={[0, -1.2, 0]}
                />
              </div>
            </div>


          </div>
        </div>
      </div>
  );
};

export default Hero;
