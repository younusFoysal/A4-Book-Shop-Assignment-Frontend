import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <button
                className="bg-gray-800 hover:bg-[#04345c] shadow-xl hover:shadow-[#04345c] transition duration-500 hover:-translate-y-1 hover:shadow-xl text-white rounded-full w-10 h-10 flex items-center justify-center"
                onClick={backToTop}
            >
                <FaArrowUp />
            </button>
        </div>
    );
};

export default BackToTop;
