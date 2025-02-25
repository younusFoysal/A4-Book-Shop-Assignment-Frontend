

const AboutUs = () => {
    return (
        <div>

            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                                 alt=""/>
                            <div className="pl-12 pr-6 rounded-3xl">
                                <img className="relative rounded-3xl"
                                     src="https://www.mycolorfulwanderings.com/wp-content/uploads/2021/09/Old-Florida-Bookshop.jpg"
                                     alt=""/>
                            </div>
                            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                                <div className="max-w-xs bg-[#04345c] rounded-3xl sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">“Join us in celebrating the joy of reading—one book at a time. Because every story matters.”</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="2xl:pl-16">
                            <h2 className="text-3xl font-bold leading-tight text-[#04345c] sm:text-4xl lg:text-5xl lg:leading-tight">
                                Our mission is to make book shopping effortless.
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-900 mt-9">
                                Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our carefully curated collection ensures there’s something for everyone.
                            </p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-900">
                                We pride ourselves on fast, reliable service and a user-friendly platform that makes book shopping enjoyable and hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutUs;