import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer";
import SidebarNavbar from "../Components/SidebarNavbar";
import img19 from "../assets/img19.jpg";
import img18 from "../assets/img18.jpg";
import img20 from "../assets/img20.jpg";
import img6 from "../assets/img6.jpg";
const images = [img19, img18, img20];

const Franchises = () => {
  const [current, setCurrent] = useState(0);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  //     }, 3000);
  //     return () => clearInterval(timer);
  //   }, [length]);
  return (
    <>
      <Navbar />
      <SidebarNavbar />
      <div className="relative">
        {/* Image */}
        <img src={img19} alt="Example" className="w-full h-auto object-cover" />
        {/* Optional black tint over image */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Text on Image */}
        <div className="absolute mt-[-50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
          Our Branches
        </div>
        {/* Blur effect at bottom */}
      </div>
      <h1 className="text-4xl font-[Montserrat(regular)] text-center mt-20">
        Introducing New look
      </h1>

      <div className="relative w-[1200px] h-[400px] overflow-hidden rounded-lg mt-10 shadow-lg ml-10 mr-10">
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Text Overlay */}

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-4 mt-[365px] ml-80  transform -translate-y-1/2 z-20 bg-[#00BCA8] hover:bg-[#00BCA8] text-black rounded-full p-2 shadow-md"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-4 mt-[365px] mr-80 transform -translate-y-1/2 z-20 bg-[#00BCA8] hover:bg-[#00BCA8] text-black rounded-full p-2 shadow-md"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#00BCA8]" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="float-right mt-10 mr-10">
        <img src={img6} alt="" className="w-[500px] h-72 rounded-lg" />
      </div>
      <h1 className="text-5xl font-[Joti One] ml-10 mt-10">Pouros and Sons</h1>
      <p className="text-2xl mt-12 text-[#333333] font-[Federo] ml-10">
        646 First Street, Quigleyville 36427 <br />
        country
      </p>
      <div className="flex ml-10 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <p className="text-2xl text-[#333333] ml-2 mt-[-5px]">
          768-123 Reviews
        </p>
      </div>
      <p className="text-2xl mt-8 text-[#333333] font-[Federo] ml-10">
        0321-1234-123
      </p>

      <h1 className="text-4xl font-mono text-center mt-20">
      We Are Now in Bristol
      </h1>

      <div className="relative w-[1200px] h-[400px] overflow-hidden rounded-lg mt-10 shadow-lg ml-10 mr-10">
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Text Overlay */}

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-4 mt-[365px] ml-80  transform -translate-y-1/2 z-20 bg-[#00BCA8] hover:bg-[#00BCA8] text-black rounded-full p-2 shadow-md"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-4 mt-[365px] mr-80 transform -translate-y-1/2 z-20 bg-[#00BCA8] hover:bg-[#00BCA8] text-black rounded-full p-2 shadow-md"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#00BCA8]" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="float-right mt-10 mr-10">
        <img src={img6} alt="" className="w-[500px] h-72 rounded-lg" />
      </div>
      <h1 className="text-5xl font-[Joti One] ml-10 mt-10">Pouros and Sons</h1>
      <p className="text-2xl mt-12 text-[#333333] font-[Federo] ml-10">
        646 First Street, Quigleyville 36427 <br />
        country
      </p>
      <div className="flex ml-10 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <p className="text-2xl text-[#333333] ml-2 mt-[-5px]">
          768-123 Reviews
        </p>
      </div>
      <p className="text-2xl mt-8 text-[#333333] font-[Federo] ml-10">
        0321-1234-123
      </p>
      <Footer />
    </>
  );
};

export default Franchises;
