

const ErPage = () => {
    return (
        <div>

            <div className="justify-center h-screen min-h-screen flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-white">404</h1>
                <p className="text-2xl text-white mt-4">Oops! Page not found.</p>
                <p className="text-white mt-2">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="mt-6 inline-block py-2  px-6 bg-white border border-[#04345c] text-[#04345c] text-center hover:text-white rounded-3xl font-semibold hover:bg-[#032a49] transition-colors duration-500">Go Home</a>
            </div>
            </div>


        </div>
    );
};

export default ErPage;