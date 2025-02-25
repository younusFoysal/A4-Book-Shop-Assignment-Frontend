import { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I place an order?",
            answer: "To place an order, simply add your desired books to the cart and proceed to checkout. Follow the steps to complete your purchase.",
            image: "https://prh.imgix.net/articles/atomichabits-1600x800-update.jpg"
        },
        {
            question: "What are the available payment options?",
            answer: "We accept credit/debit cards, PayPal, and other secure payment methods to ensure a seamless transaction.",
            image: "https://www.hollywoodreporter.com/wp-content/uploads/2021/07/book-The-Alchemist-book.jpg?w=1296&h=730&crop=1"
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery times depend on your location. Typically, orders are delivered within 3-7 business days. Digital books are available instantly after purchase.",
            image: "https://www.kamoi.net/wp-content/uploads/2020/11/Milk-and-honey-book-cover.png"
        },
        {
            question: "Can I return or exchange a book?",
            answer: "Yes, we have a 14-day return policy for physical books. Digital books, however, are non-refundable once purchased.",
            image: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg"
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship worldwide! International shipping rates and delivery times vary based on your location.",
            image: "https://images.penguinrandomhouse.com/cover/9780451524935"
        },
        {
            question: "How can I track my order?",
            answer: "After placing an order, you will receive a tracking link via email. You can also track your order from your account dashboard.",
            image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
        },
        {
            question: "Do you offer discounts or promotions?",
            answer: "Yes! We frequently offer discounts, promotions, and seasonal sales. Subscribe to our newsletter for updates.",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8c/Think_and_Grow_Rich.jpg"
        }

    ];


    return (
        <div className="container mx-auto my-10 mb-40">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#04345c] mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-lg">Find answers to common questions about our bookstore.</p>
            </div>

            <section className="product-infomation">
                <div className="flex flex-col lg:flex-row bg-[#b3c2ce] rounded-[32px] lg:h-[778px]">
                    <div className="w-full lg:w-1/2 h-full">
                        <img
                            id="heroImage"
                            className={`w-full h-full object-cover lg:rounded-l-[32px] rounded-t-[32px] transition-opacity duration-1000 ${openIndex !== null ? 'opacity-0' : 'opacity-100'}`}
                            aria-hidden="true"
                            src={openIndex !== null ? faqs[openIndex].image : "https://images.squarespace-cdn.com/content/v1/5d8fc40ed3f19b71ebb703a6/13a3cc61-4224-4642-aff0-32ab44fd4325/Think+and+Grow+Rich_Napoleon+Hill.jpg"}
                            alt="imagine"
                            onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')}
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="p-10">
                            <h2 className="text-[2.2rem] text-[#04345c] font-semibold leading-tight mb-6 transition-all duration-600">
                                Frequently Asked Questions
                            </h2>
                            <section className="accordion">
                                <div className="bg-[#68859d] rounded-[20px]">
                                    {faqs.map((faq, index) => (
                                        <div key={index}>
                                            <div
                                                className="accordion-header flex justify-between items-center p-6 cursor-pointer transition-all duration-300"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <div className="accordion-title flex-1 mr-6 text-white/80  text-left text-[16px] leading-6 font-bold transition-all duration-200">
                                                    {faq.question}
                                                </div>
                                                <span className="accordion-icon h-[30px] w-[30px] rounded-full bg-white/80 flex items-center justify-center">
                                                    <svg
                                                        className={`w-4 h-4 text-[#5f6368] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className={`accordion-panel overflow-hidden transition-all text-white/90 duration-300 ${openIndex === index ? 'max-h-40 p-6' : 'max-h-0 p-0'}`}>
                                                <p className="mb-4 leading-6">{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
