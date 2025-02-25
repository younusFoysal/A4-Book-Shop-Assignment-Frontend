

const TopPopularBooks = () => {

    const popularBooks = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            image: "/books/1.jpg",
            rating: 4.8,
            featured: true
        },
        {
            id: 2,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            image: "/books/2.jpg",
            rating: 4.7
        },
        {
            id: 3,
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            image: "/books/3.jpeg",
            rating: 4.9,
            featured: true
        },
        {
            id: 4,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            image: "/books/4.jpg",
            rating: 4.8
        },
        {
            id: 5,
            title: "The 48 Laws of Power",
            author: "Robert Greene",
            image: "/books/5.jpeg",
            rating: 4.7,
            featured: true
        },
        {
            id: 6,
            title: "The Power of Now",
            author: "Eckhart Tolle",
            image: "/books/6.jpg",
            rating: 4.8
        },
        {
            id: 7,
            title: "The Alchemist",
            author: "Paulo Coelho",
            image: "/books/7.jpg",
            rating: 4.9
        },
        {
            id: 8,
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            image: "/books/8.jpg",
            rating: 4.8
        },
        {
            id: 9,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            image: "/books/9.jpg",
            rating: 4.7,
            featured: true
        },
        {
            id: 10,
            title: "Dune",
            author: "Frank Herbert",
            image: "/books/10.jpg",
            rating: 4.8
        },
        {
            id: 11,
            title: "1984",
            author: "George Orwell",
            image: "/books/11.jpg",
            rating: 4.8
        },
        {
            id: 12,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "/books/12.jpg",
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
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[0].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[0].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[0].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[0].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[1].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[1].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[1].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[1].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[2].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[2].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[2].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[2].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="grid gap-4">
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[3].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[3].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[3].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[3].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[4].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[4].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[4].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[4].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[5].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[5].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[5].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[5].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[6].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[6].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[6].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[6].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[7].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[7].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[7].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[7].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[8].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[8].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[8].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[8].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[9].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[9].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[9].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[9].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[10].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[10].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[10].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[10].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                            src={popularBooks[11].image} alt=""/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{popularBooks[10].title}</h3>
                                <p className="text-sm text-gray-300">{popularBooks[11].author}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1 text-sm">{popularBooks[11].rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopPopularBooks;