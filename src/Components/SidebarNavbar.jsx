import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to return style class based on active route
  const getLinkClasses = (path) => {
    return currentPath === path ? "opacity-100" : "opacity-40 hover:opacity-80";
  };

  return (
    <>
      <div className="fixed top-1/4 right-7 z-50 p-4 bg-black/60 text-white w-20 rounded-lg backdrop-blur-sm">
        {/* Home */}
        <Link
          to="/"
          className={`group flex flex-col items-center ${getLinkClasses("/")}`}
        >
          <svg
            className="ml-2 w-4 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="13.5"
            viewBox="0 0 576 512"
          >
            <path
              fill="#ffffff"
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <h2 className="text-[12px] ml-2 font-[Federo]">Home</h2>
        </Link>

        {/* Menu */}
        <Link
          to="/menu"
          className={`group flex flex-col items-center ${getLinkClasses(
            "/menu"
          )}`}
        >
          <svg
            className="ml-1 mt-7 w-4 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="10.5"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fafcff"
              d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16z"
            />
          </svg>

          <p className="ml-1 text-[12px] font-[Federo]">Menu</p>
        </Link>

        {/* Franchise */}
        <Link
          to="/franchises"
          className={`group flex flex-col items-center ${getLinkClasses(
            "/franchises"
          )}`}
        >
          <svg
            className="ml-1 mt-7 w-4 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="12"
            viewBox="0 0 512 512"
          >
            <path
              fill="#f3f4f7"
              d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"
            />
          </svg>

          <p className="ml-1 text-[12px] font-[Federo]">Franchise</p>
        </Link>

        {/* About */}
        <Link
          to="/about"
          className={`group flex flex-col items-center ${getLinkClasses(
            "/about"
          )}`}
        >
          <svg
            className="ml-1 mt-6 w-4 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="12"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fafcff"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l
  0 144 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144 0 24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            />
          </svg>
          <p className="text-[12px] font-[Federo]">About</p>
        </Link>

        {/* Contact Us */}
        <Link
          to="/contact"
          className={`group flex flex-col items-center ${getLinkClasses(
            "/contact"
          )}`}
        >
          <svg
            className="ml-1 mt-6 w-4 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="12"
            viewBox="0 0 512 512"
          >
            <path
              fill="#f9fafa"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64
    C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4
    l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3
    L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>

          <p className="text-[12px] font-[Federo]">Contact</p>
        </Link>

        {/* BookNow Button */}
        <button className="mt-8 px-3 py-2 text-[7px] bg-[#00BCA8] text-white rounded-md hover:bg-[#009e92] transition-all duration-300">
          BookNow
        </button>
      </div>
    </>
  );
};

export default SidebarNavbar;
