import {BadgePercent, BookCopy, Truck} from "lucide-react";

const TopSoldBookFeatures = () => {
    return (
        <section className="relative container mx-auto z-10  my-20 ">
            <div className="w-full overflow-hidden">
                <div className="relative z-20 flex flex-row w-full lg:w-11/12 mx-auto px-4 lg:!px-0">
                    <div className="w-full md:w-7/12 lg:w-8/12 py-6 md:py-12">
                        <div className="flex flex-row">
                            <div className="w-1/12 text-8xl md:text-9xl font-bold text-[#04345c]">
                                25
                            </div>
                            <div className="w-11/12 flex flex-col ml-28 mt-3">
                                <p className="font-light text-xl md:text-3xl dark:text-gray-200">years of</p>
                                <h2 className="font-semibold text-3xl text-[#04345c] md:text-5xl lg:text-6xl dark:text-gray-200">Excellence</h2>
                            </div>
                        </div>
                        <div className="pt-2 pb-4 md:pt-4 border-b border-gray-300 dark:border-gray-700">
                            <p className="font-light dark:text-gray-200">
                                Discover a world of knowledge through our carefully curated collection of books.
                                From timeless classics to contemporary bestsellers, we bring you the finest literary experiences.
                            </p>
                        </div>
                        <div className="w-full mt-2 md:pt-4 flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 flex flex-row mt-6 md:!mt-0">
                                <div className="relative w-3/12">
                                    <div className="absolute bottom-6 top-0 rounded-full w-12 h-12 bg-[#04345c] flex pl-3 items-center hover:shadow-md transition-all duration-500 hover:scale-105">
                                        <BookCopy className="text-white w-6 h-6" />
                                    </div>
                                </div>
                                <div className="w-9/12 flex flex-col">
                                    <h1 className="font-semibold mb-1.5 md:mb-3 uppercase md:pl-4 dark:text-gray-200">
                                        Vast Collection
                                    </h1>
                                    <p className="mb-1 font-light pr-2 leading-relaxed line-clamp-3 md:pl-4 dark:text-gray-200">
                                        Over 100,000 titles across multiple genres, ensuring you find exactly what you're looking for.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-row mt-6 md:!mt-0">
                                <div className="relative w-3/12">
                                    <div
                                        className="absolute bottom-6 top-0 rounded-full w-12 h-12 bg-[#04345c] flex pl-3 items-center hover:shadow-md transition-all duration-500 hover:scale-105">
                                        <Truck className="text-white w-6 h-6"/>
                                    </div>
                                </div>
                                <div className="w-9/12 flex flex-col">
                                    <h1 className="font-semibold mb-1.5 md:mb-3 uppercase md:pl-4 dark:text-gray-200">
                                        Fast Delivery
                                    </h1>
                                    <p className="mb-1 font-light pr-2 leading-relaxed line-clamp-3 md:pl-4 dark:text-gray-200">
                                        Quick and reliable shipping worldwide, getting books to your doorstep in record time.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-row mt-6 md:!mt-0">
                                <div className="relative w-3/12">
                                    <div
                                        className="absolute bottom-6 top-0 rounded-full w-12 h-12 bg-[#04345c] flex pl-3 items-center hover:shadow-md transition-all duration-500 hover:scale-105">
                                        <BadgePercent className="text-white w-6 h-6"/>
                                    </div>
                                </div>
                                <div className="w-9/12 flex flex-col">
                                    <h1 className="font-semibold mb-1.5 md:mb-3 uppercase md:pl-4 dark:text-gray-200">
                                        Best Prices
                                    </h1>
                                    <p className="mb-1 font-light pr-2 leading-relaxed line-clamp-3 md:pl-4 dark:text-gray-200">
                                        Competitive pricing and regular discounts to make quality reading accessible to everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden md:inline md:w-5/12 lg:w-4/12 mt-12 justify-items-center rounded-3xl bottom-0 hover:scale-105 transition-all duration-500 ">
                        <img
                            className="object-cover w-auto h-[385px] absolute left-10 button-0 rounded-3xl"
                            src="https://visithendersonvillenc.org/wp-content/uploads/araix-rand-Xe46kNRhXsA-unsplash-scaled.jpg"
                            title="Book Collection"
                            alt="Book Collection"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSoldBookFeatures;
