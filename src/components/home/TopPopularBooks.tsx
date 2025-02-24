

const TopPopularBooks = () => {

    const popularBooks = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
            rating: 4.8,
            featured: true
        },
        {
            id: 2,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            image: "https://images-na.ssl-images-amazon.com/images/I/71r3ktfqkwL.jpg",
            rating: 4.7
        },
        {
            id: 3,
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
            rating: 4.9,
            featured: true
        },
        {
            id: 4,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
            rating: 4.8
        },
        {
            id: 5,
            title: "The 48 Laws of Power",
            author: "Robert Greene",
            image: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL.jpg",
            rating: 4.7,
            featured: true
        },
        {
            id: 6,
            title: "The Power of Now",
            author: "Eckhart Tolle",
            image: "https://images-na.ssl-images-amazon.com/images/I/714FbKtXS+L.jpg",
            rating: 4.8
        },
        {
            id: 7,
            title: "The Alchemist",
            author: "Paulo Coelho",
            image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
            rating: 4.9
        },
        {
            id: 8,
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            image: "https://images-na.ssl-images-amazon.com/images/I/71oD1Z5kGwL.jpg",
            rating: 4.8
        },
        {
            id: 9,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            image: "https://images-na.ssl-images-amazon.com/images/I/71cv-b7-DzL.jpg",
            rating: 4.7,
            featured: true
        },
        {
            id: 10,
            title: "Dune",
            author: "Frank Herbert",
            image: "https://images-na.ssl-images-amazon.com/images/I/91EzqsAKdRL.jpg",
            rating: 4.8
        },
        {
            id: 11,
            title: "1984",
            author: "George Orwell",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
            rating: 4.8
        },
        {
            id: 12,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg",
            rating: 4.9,
            featured: true
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#04345c] mb-4">
                    Most Popular Books
                </h2>
                <p className="text-gray-600 text-lg">
                    Discover the books that have captured readers worldwide
                </p>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">

                    <div className="relative group overflow-hidden rounded-3xl">
                        <img className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">Title</h3>
                                <p className="text-sm text-gray-300">{popularBooks[0].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[0].rating}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopPopularBooks;