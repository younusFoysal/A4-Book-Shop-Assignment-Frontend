
import GltfViewerHome from "@/components/home/GltfViewerHome.tsx";
import {useState} from "react";
import {toast} from "sonner";



const Hero = () => {
  const [emailValue, setEmailValue] = useState("");

  const handleGetMail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailValue){
      if (emailValue.includes("@") && emailValue.includes(".")) {
        toast.success("Sent a copy of the book to your email!");
      } else {
        toast.error("Email is invalid");
      }
    }else {
      toast.error("Email is required");
    }
    console.log(emailValue);
  };

  return (
      <div className="container mx-auto relative py-8 overflow-hidden sm:py-8 lg:py-2">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24">

            {/* Text and Button Section - Left Side */}
            <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-[#04345c]">A better way to buy books online </p>

              <h1 className="mt-5 text-3xl uppercase font-bold text-[#04345c] lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight">
                Save 50% off on your next favourite read!
                {/*Learn to earn 💰 <br/> without losing time.*/}
              </h1>

              <div className="mt-10 lg:mt-14">
                <p className="text-base font-bold text-[#04345c]">Get your free chapter now</p>
                <form className="mt-4 lg:mt-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input
                        type="email"
                        placeholder="Email where we'll send the book"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        className="w-2/3 px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all  outline-none  font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white  border-[#04345c]/70 "
                    />
                  </div>
                  <button
                      onClick={handleGetMail}
                      type="button"
                      className="w-2/3 mt-3 px-8 py-3 text-base font-semibold  bg-[#04345c]  hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-full  transition-colors duration-500  drop-shadow-lg disabled:opacity-50">
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
