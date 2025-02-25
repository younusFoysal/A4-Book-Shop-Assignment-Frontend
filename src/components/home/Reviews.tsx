import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// @ts-ignore
import "swiper/css";
// @ts-ignore
import 'swiper/css/pagination';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Book Enthusiast",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            review: "The collection of books is amazing! I found rare editions that I couldn't find anywhere else. The delivery was quick and the books were in perfect condition."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Literature Professor",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            review: "The academic collection is particularly impressive. My students have benefited greatly from the wide range of scholarly texts available here."
        },
        {
            id: 3,
            name: "Emily Parker",
            role: "Fiction Writer",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            review: "The curated collection of contemporary fiction is outstanding. I've discovered so many new authors through this bookshop!"
        },
        {
            id: 4,
            name: "David Wilson",
            role: "Poetry Lover",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            review: "The poetry section is a treasure trove. I appreciate the mix of classic and contemporary collections."
        },
        {
            id: 5,
            name: "Lisa Zhang",
            role: "Book Blogger",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
            review: "As a book reviewer, I'm impressed by the variety and quality of books available. The recommendations are always spot-on!"
        },
        {
            id: 6,
            name: "James Anderson",
            role: "History Buff",
            image: "https://randomuser.me/api/portraits/men/6.jpg",
            review: "The history collection is well-organized and features some fantastic rare books. A great place for any history lover!"
        },
        {
            id: 7,
            name: "Sophia Martinez",
            role: "Science Fiction Fan",
            image: "https://randomuser.me/api/portraits/women/7.jpg",
            review: "The sci-fi collection is outstanding! So many classics and new releases. Definitely my go-to bookstore for anything speculative fiction."
        },
        {
            id: 8,
            name: "Robert Green",
            role: "Philosophy Student",
            image: "https://randomuser.me/api/portraits/men/8.jpg",
            review: "A fantastic selection of philosophical texts. I was able to find several out-of-print editions that have been invaluable for my research."
        },
        {
            id: 9,
            name: "Olivia Carter",
            role: "Children's Book Illustrator",
            image: "https://randomuser.me/api/portraits/women/9.jpg",
            review: "The children's book collection is colorful and diverse. As an illustrator, I appreciate the variety of art styles featured in these books."
        },
        {
            id: 10,
            name: "Daniel Robinson",
            role: "Self-Help Reader",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            review: "A wonderful selection of self-help and personal development books. The recommendations helped me find exactly what I needed."
        }
    ];


    return (
        <div className="container mx-auto py-12 mb-20">
            {/*<div className="text-center mb-12">*/}
            {/*    <h4 className="text-base font-bold tracking-wide uppercase text-primary">Reader Reviews</h4>*/}
            {/*    <p className="mt-2 tracking-tight text-gray-900 text-xl md:text-2xl">What Our Readers Say</p>*/}
            {/*</div>*/}

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#04345c] mb-4">
                    Reader Reviews
                </h2>
                <p className="text-gray-600 text-lg">
                    What Our Readers Say
                </p>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="px-4 py-8"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="p-8 bg-white  rounded-3xl h-full mb-16">
                            <div className="flex gap-4 items-start">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={review.image}
                                    alt={`${review.name} avatar`}
                                    loading="lazy"
                                />
                                <div className="flex-1 flex justify-between items-start">
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700">{review.name}</h6>
                                        <p className="text-sm text-gray-500">{review.role}</p>
                                        <div className="flex mt-1">
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    className="w-4 h-4 text-yellow-500"
                                                    fill="currentColor"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <Quote className="w-6 h-6 text-primary"/>
                                </div>
                            </div>
                            <p className="mt-8">{review.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
