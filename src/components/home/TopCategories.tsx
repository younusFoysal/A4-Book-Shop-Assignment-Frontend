const TopCategories = () => {
    const bookCategories = [
        {
            name: "Fiction",
            icon: "📚",
            description: "Novels, Short Stories, Fantasy",
            count: "2,500+ Books"
        },
        {
            name: "Non-Fiction",
            icon: "🎓",
            description: "Biography, History, Science",
            count: "1,800+ Books"
        },
        {
            name: "Academic",
            icon: "📖",
            description: "Textbooks, Research Papers",
            count: "1,200+ Books"
        },
        {
            name: "Children's",
            icon: "🎨",
            description: "Picture Books, Young Readers",
            count: "1,500+ Books"
        },
        {
            name: "Self-Development",
            icon: "🌱",
            description: "Personal Growth, Psychology",
            count: "900+ Books"
        },
        {
            name: "Business",
            icon: "💼",
            description: "Management, Finance, Leadership",
            count: "750+ Books"
        },
        {
            name: "Technology",
            icon: "💻",
            description: "Programming, Digital Skills",
            count: "600+ Books"
        },
        {
            name: "Literature",
            icon: "✍️",
            description: "Classics, Poetry, Drama",
            count: "1,100+ Books"
        },
        {
            name: "Mystery & Thriller",
            icon: "🔍",
            description: "Crime, Suspense, Detective",
            count: "950+ Books"
        },
        {
            name: "Health & Wellness",
            icon: "🌿",
            description: "Fitness, Nutrition, Mental Health",
            count: "700+ Books"
        },
        {
            name: "Arts & Culture",
            icon: "🎨",
            description: "Music, Film, Photography",
            count: "600+ Books"
        },
        {
            name: "Science Fiction",
            icon: "🚀",
            description: "Space, Dystopian, Sci-Fi",
            count: "800+ Books"
        }
    ];

    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#04345c] mb-4">
                        Discover Your Next Read
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our vast collection across different genres and find the perfect book for you
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {bookCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-6 hover:bg-[#04345c] transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#04345c] group-hover:text-white">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-gray-200">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500 group-hover:text-gray-300">
                                    {category.count}
                                </span>
                                <span
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  →
                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button
                        className="px-10 py-4  bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-full font-semibold transition-colors duration-500 text-base drop-shadow-lg disabled:opacity-50
">
                        Browse All Categories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
