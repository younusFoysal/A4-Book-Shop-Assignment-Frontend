import { useState, useEffect } from "react";

const Cookie: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const cookieAcceptedTime = localStorage.getItem("cookieAcceptedTime");
        const currentTime = new Date().getTime();

        // Show the banner if it's never been accepted or if 3 hours have passed
        if (!cookieAcceptedTime || currentTime - Number(cookieAcceptedTime) > 3 * 60 * 60 * 1000) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = (): void => {
        setIsVisible(false);
        localStorage.setItem("cookieAcceptedTime", new Date().getTime().toString());
    };

    return isVisible ? (
        <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/95 p-2 shadow-2xl max-sm:w-11/12">
            <div className="flex items-center justify-between gap-6 text-[12px]">
                <div className="pl-4">
                    This website uses cookies to improve your web experience.
                </div>
                <div className="text-end">
                    <button
                        className="cursor-pointer rounded-full bg-[#04345c] px-4 py-2 text-white"
                        onClick={handleAccept}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Cookie;
