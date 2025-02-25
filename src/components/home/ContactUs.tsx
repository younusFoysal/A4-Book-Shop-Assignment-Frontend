

const ContactUs = () => {
    return (
        <div className="mt-16 ">

            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div
                                className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200"
                                                 x="100%" y="-1"
                                                 patternUnits="userSpaceOnUse">
                                            <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth="0" fill="white"></rect>
                                    <svg x="100%" y="-1"
                                         className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth="0"
                                          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight text-[#04345c]">Get in Touch</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Have questions about our books or your order? Reach out to us, and we'll be happy to assist you.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5"
                                             stroke="currentColor" aria-hidden="true" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                            </path>
                                        </svg>
                                    </dt>
                                    <dd><a className="hover:text-gray-900"
                                           href="mailto:contact@yourcompany.com">support@bookhub.com
                                    </a></dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5"
                                             stroke="currentColor" aria-hidden="true" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z">
                                            </path>
                                        </svg>
                                    </dt>
                                    <dd>123 Book Street, Reading Avenue</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name"
                                           className="block text-sm font-semibold leading-6 text-gray-900">First
                                        name</label>
                                    <div className="mt-2.5">
                                        <input type="text" id="first-name" autoComplete="given-name"
                                               className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                               name="firstName"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name"
                                           className="block text-sm font-semibold leading-6 text-gray-900">Last
                                        name</label>
                                    <div className="mt-2.5">
                                        <input type="text" id="last-name" autoComplete="family-name"
                                               className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                               name="lastName"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email"
                                           className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                    <div className="mt-2.5">
                                        <input type="email" id="email" autoComplete="email"
                                               className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                               name="email"/>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message"
                                           className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                    <div className="mt-2.5">
                                        <textarea id="message" rows={6}
                                                  className="block w-full rounded-3xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                  name="message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-start">
                                <button type="submit"
                                        className="w-max  px-5 py-1.5 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-full font-semibold transition-colors duration-500 text-base drop-shadow-lg disabled:opacity-50">
                                    Send
                                    message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;