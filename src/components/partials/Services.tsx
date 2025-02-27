import {LibraryBig, ShieldCheck, Truck} from "lucide-react";

const Services = () => {
    return (
        <div>

            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <div
                            className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-[#04345c]">
                            <p className="text-xs font-semibold tracking-widest text-white uppercase">Explore Our Services</p>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold leading-tight text-[#04345c] sm:text-4xl lg:text-5xl">Enhancing Your Reading Experience</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Discover a seamless way to find, buy, and enjoy books with our dedicated services designed for book lovers.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-3xl">
                            <div className="py-10 px-9">
                                <ShieldCheck className="w-16 h-16 text-[#04345c]"/>

                                <h3 className="mt-8 text-lg font-semibold text-[#04345c]">Secure & Easy Payments</h3>
                                <p className="mt-4 text-base text-gray-600">Enjoy a hassle-free checkout with multiple secure payment options for your favorite books.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-3xl">
                            <div className="py-10 px-9">
                                <LibraryBig className="w-16 h-16 text-[#04345c]" />
                                <h3 className="mt-8 text-lg font-semibold text-[#04345c]">Wide Collection</h3>
                                <p className="mt-4 text-base text-gray-600">Browse a vast collection of books, from bestsellers to rare finds, curated just for you.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-3xl">
                            <div className="py-10 px-9">
                                <Truck className="w-16 h-16 text-[#04345c]" />
                                <h3 className="mt-8 text-lg font-semibold text-[#04345c]">Fast & Reliable Delivery</h3>
                                <p className="mt-4 text-base text-gray-600">Get your books delivered quickly with our efficient and reliable shipping services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
