import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="pt-9  w-full min-h-full flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10 w-10 border p-0.5 rounded-md bg-white"/>
                <h2 className="text-white font-bold text-3xl ml-2">Book Hub</h2>
              </Link>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
                Your one-stop destination for all types of books. From bestsellers to rare collections,
                we bring the world of literature to your doorstep.
              </p>
              <div className="mt-[18px] flex gap-4">
                {/* Social Media Icons */}
              </div>
            </div>

            <div className="md:w-[316px]">
              <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0">
                <div>
                  <p className="text-[18px] font-medium mb-4">Quick Links</p>
                  <ul>
                    <li className="mt-[15px]"><Link to="/" className="hover:text-white/80">Home</Link></li>
                    <li className="mt-[15px]"><Link to="/allProducts" className="hover:text-white/80">All Books</Link></li>
                    <li className="mt-[15px]"><Link to="/categories" className="hover:text-white/80">Categories</Link></li>
                    <li className="mt-[15px]"><Link to="/new-releases" className="hover:text-white/80">New Releases</Link></li>
                    <li className="mt-[15px]"><Link to="/bestsellers" className="hover:text-white/80">Bestsellers</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-[316px]">
              <p className="text-[18px] font-medium text-white mb-4">Contact Us</p>
              <div className="mt-[23px] flex">
                <div className="ml-[18px]">
                  <a href="tel:+1234567890" className="text-[14px] font-medium text-white">+1 (234) 567-890</a>
                  <p className="text-[12px] font-medium text-white">Customer Support</p>
                </div>
              </div>
              <div className="mt-[23px]">
                <div className="ml-[18px]">
                  <a href="mailto:support@bookhub.com" className="text-[14px] font-medium text-white">support@bookhub.com</a>
                  <p className="text-[12px] font-medium text-white">Email Support</p>
                </div>
              </div>
              <div className="mt-[23px]">
                <div className="ml-[18px]">
                  <p className="text-[14px] font-medium text-white">123 Book Street, Reading Avenue</p>
                  <p className="text-[12px] font-medium text-white">Store Location</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-[30px] text-white" />
          <div className="flex items-center justify-center py-8">
            <p className="text-[12px] font-normal text-white">
              © {new Date().getFullYear()} Book Hub - Your Literary Paradise
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
