import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* 🔹 Top Section */}
      <div className="bg-[#cfcdcd] text-black pt-12 pb-6 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand Info */}
          <div>
            <h1 className="text-2xl font-[Federo] mb-4">LOGO</h1>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
              <div className="mt-6">
                <div className="relative w-full md:w-80">
                  {/* Input */}
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full bg-white border-px border-gray-600 bg-opacity-20 text-black placeholder-black px-4 pr-12 py-2 rounded-md font-[Federo] outline-none"
                  />

                  {/* Button with Arrow Icon */}
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-2 flex items-center justify-center"
                  >
                    <svg
                      className="w-6 h-6 text-[#00BCA8]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-black opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="#" className="hover:text-black transition">
                  Home
                </a>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-black opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="#" className="hover:text-black transition">
                  Menu
                </a>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-black opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="#" className="hover:text-black transition">
                  About Us
                </a>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-black opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="#" className="hover:text-black transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="hover:text-black transition"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12A10 10 0 1 0 12 22V14.7H10v-3h2V10c0-2 1.2-3.2 3-3.2.9 0 1.8.1 2 .1v2.3h-1.4c-1.1 0-1.4.5-1.4 1.3v1.7h2.8l-.4 3h-2.4V22A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="hover:text-black transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="hover:text-black transition"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.07 9.07 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.49 0-4.5 2.01-4.5 4.5v1A10.66 10.66 0 0 1 3 2.17s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Bottom Bar */}
      <div className="bg-[#00BCA8] text-white text-sm text-center py-4">
        © {new Date().getFullYear()} MyRestaurant — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
