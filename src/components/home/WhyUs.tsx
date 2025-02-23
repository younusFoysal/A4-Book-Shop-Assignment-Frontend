
import {BookOpen, Clock, CreditCard, Truck} from "lucide-react";

const WhyUs = () => {
    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#04345c] mb-4">Why Choose Books Hub?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover the perfect reading experience with our carefully curated collection and premium
                        services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Extensive Collection */}
                    <div className="bg-white rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#04345c] rounded-2xl">
                                <BookOpen className="w-8 h-8 text-white"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#04345c] mb-2">
                            Vast Collection
                        </h3>
                        <p className="text-gray-600">
                            Over 10,000 books across multiple genres to choose from
                        </p>
                    </div>

                    {/* Fast Delivery */}
                    <div className="bg-white rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#04345c] rounded-2xl">
                                <Truck className="w-8 h-8 text-white"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#04345c] mb-2">
                            Quick Delivery
                        </h3>
                        <p className="text-gray-600">
                            Fast and reliable shipping to your doorstep
                        </p>
                    </div>

                    {/* 24/7 Support */}
                    <div className="bg-white rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#04345c] rounded-2xl">
                                <Clock className="w-8 h-8 text-white"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#04345c] mb-2">
                            24/7 Support
                        </h3>
                        <p className="text-gray-600">
                            Round-the-clock customer service for your needs
                        </p>
                    </div>

                    {/* Secure Payment */}
                    <div className="bg-white rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#04345c] rounded-2xl">
                                <CreditCard className="w-8 h-8 text-white"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#04345c] mb-2">
                            Secure Payment
                        </h3>
                        <p className="text-gray-600">
                            Safe and encrypted payment methods
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;