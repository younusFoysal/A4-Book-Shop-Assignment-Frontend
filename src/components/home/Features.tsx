const Features = () => {
    return (
        <div>
            <section>
                <div>
                    <svg viewBox="0 0 1925 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.0021713 0L0.000976562 375.003L1925 0H0.0021713Z"
                              fill="#04345c"></path>
                    </svg>
                </div>
                <main className="flex md:flex-row justify-center flex-col gap-[100px] md:gap-[40px] lg:gap-[100px] mx-auto w-full max-w-[1440px] min-w-[280px] py-8 px-4 lg:px-8">
                    <div className="max-w-[550px] mt-16">
                        <p className="text-xl text-[#048ed6]">Discover the joy of reading with our extensive collection of books and premium services.</p>
                        <h2 className="text-[30px] leading-[48px] md:text-[50px] md:leading-[68px] mt-5 mb-16 font-bold text-[#04345c]">Your Journey Through Literature Starts Here</h2>
                        <button className="w-full flex items-center justify-between outline-gray-600 max-w-[350px] text-xl font-bold sm:text-lg rounded-[38px] bg-[#04345c] text-white py-4 px-6 sm:px-9">
                            <span>Browse Collection</span>
                        </button>
                    </div>
                    <div className="flex md:mt-[-70px] items-center flex-col md:grid md:grid-cols-[220px_220px] lg:grid-cols-[250px_250px] grid-rows-8 gap-[60px] md:gap-[30px] lg:gap-[45px]">
                        <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-[#ffffff] rounded-[40px] w-[250px] md:w-[220px] lg:w-[250px] p-8 md:p-4 lg:p-8">
                            <div>
                                <span className="text-[72px] text-black leading-[93px] font-bold">1<span className="text-[#048ed6]">.</span></span>
                                <p>
                                    <span className="text-2xl font-bold">Wide Selection</span><br/>
                                    <span className="text-xl font-semibold">Diverse Genres</span><br/>
                                    <span className="text-lg font-extralight">From classics to contemporary</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-start-2 col-end-3 row-start-2 row-end-5 bg-[#048ed6] rounded-[40px] w-[250px] md:w-[220px] lg:w-[250px] p-8 md:p-4 lg:p-8">
                            <div>
                                <span className="text-[72px] text-black leading-[93px] font-bold">2<span className="text-[#fff]">.</span></span>
                                <p>
                                    <span className="text-2xl font-bold">Expert Staff</span><br/>
                                    <span className="text-xl font-semibold">Book Advisory</span><br/>
                                    <span className="text-lg font-extralight">Personalized recommendations</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-2 row-start-4 row-end-7 bg-[#048ed6] rounded-[40px] w-[250px] md:w-[220px] lg:w-[250px] p-8 md:p-4 lg:p-8">
                            <div>
                                <span className="text-[72px] text-black leading-[93px] font-bold">3<span className="text-[#fff]">.</span></span>
                                <p>
                                    <span className="text-2xl font-bold">Fast Delivery</span><br/>
                                    <span className="text-xl font-semibold">Quick Service</span><br/>
                                    <span className="text-lg font-extralight">Right to your doorstep</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-start-2 col-end-3 row-start-5 row-end-8 bg-[#fff] rounded-[40px] w-[250px] md:w-[220px] lg:w-[250px] p-8 md:p-4 lg:p-8">
                            <div>
                                <span className="text-[72px] text-black leading-[93px] font-bold">4<span className="text-[#048ed6]">.</span></span>
                                <p>
                                    <span className="text-2xl font-bold">Member Benefits</span><br/>
                                    <span className="text-xl font-semibold">Special Offers</span><br/>
                                    <span className="text-lg font-extralight">Exclusive discounts & events</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>


                <div className=" bg-white ">

                    <div className="relative w-full bg-[#010e28] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center animate-bgmove"></div>
                        <svg className="relative w-full h-auto" viewBox="0 0 1925 375" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.0021713 0L0.000976562 375.003L1925 0H0.0021713Z"
                                fill="#f8f8f8"
                            ></path>
                        </svg>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Features;
