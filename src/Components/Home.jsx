import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";

const categories = [
  { img: img1, label: "Breakfast" },
  { img: img2, label: "Lunch" },
  { img: img3, label: "Dinner" },
  { img: img4, label: "Desserts" },
];

import Navbar from "./Navbar";
import SidebarNavbar from "./SidebarNavbar";
import Footer from "./Footer";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/custom.css"; // Import custom styles for arrows/dots

const Home = () => {
  const images = [img1, img2, img7];

  // State for autoplay control
  const [autoplay, setAutoplay] = useState(true);

  // Slider settings with autoplay control
  const settings = {
    dots: true, // ✅ dots enabled
    arrows: false, // ❌ arrows disabled
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay, // Autoplay based on hover state
    autoplaySpeed: 1000,
    pauseOnHover: false, // Pause autoplay when hovered
  };

  return (
    <>
      <Navbar />
      <SidebarNavbar />
      <header className="relative flex">
        {/* Slider Section with First Image */}
        <div
          className="relative w-full h-[450px] overflow-hidden"
          onMouseEnter={() => setAutoplay(true)} // Start autoplay on hover
          onMouseLeave={() => setAutoplay(false)} // Stop autoplay when hover is removed
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <div className="relative w-full h-[450px]">
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover"
                  />
                  {/* This div adds blur effect */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                </div>
              </div>
            ))}
          </Slider>

          {/* Centered White Text */}
          <div className="absolute inset-0 pointer-events-none text-center">
            <p className="text-white text-3xl font-normal mt-[120px] font-[WindSong] drop-shadow-xl">
              Its Quick & Amusing!
            </p>
            <h2 className="text-white text-4xl font-black mt-[40px] font-[Federo] drop-shadow-xl">
              Lorem ipsum dolor <br /> sit amet consectetur.
              <br />
            </h2>
            <p className="text-white text-base mt-8 font-thin drop-shadow-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#00BCA8] text-white py-2 px-6 mt-8 rounded-lg">
              See Menu
            </button>
          </div>
        </div>

        {/* Second Static Image */}
        <img
          src={img1}
          alt="Second"
          className="w-full h-[450px] object-cover"
        />
      </header>

      <div className="flex w-full h-screen mt-7 p-8 gap-8">
        {/* Left Side Text */}
        <div className="w-1/2 ">
          <div>
            <h2 className="text-3xl font-mono ml-4 mb-4">About us</h2>
            <p className="text-5xl pt-4 ml-4 text-gray-700 font-[Federo]">
              We Create the best <br /> foody product
            </p>
            <p className="text-gray-600 mt-6 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              <br />
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              <br />
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              <br />
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
              sit.
            </p>

            <div className="p-12 ml-[-30px]">
              <div className="space-y-3  text-lg text-gray-800">
                <p className="font-mono">
                  <span className="text-green-600 mr-2">✓</span>
                  Fresh ingredients used daily
                </p>
                <p className="font-mono">
                  <span className="text-green-600 mr-2">✓</span>
                  Fast delivery within 30 minutes
                </p>
                <p className="font-mono">
                  <span className="text-green-600 mr-2">✓</span>
                  100% customer satisfaction
                </p>
              </div>
            </div>
            <button className="px-6 py-3 ml-5 bg-gradient-to-r from-[#00BCA8] to-[#0E9AA7] text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
              Explore More
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* Top Single Image */}
          <div className="w-full h-[290px]">
            <img
              src={img1}
              alt="Top"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Bottom Two Images Side by Side */}
          <div className="flex gap-4 h-[200px]">
            <div className="w-1/2 h-full">
              <img
                src={img2}
                alt="Bottom Left"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 h-full">
              <img
                src={img3}
                alt="Bottom Right"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-mono mt-28 text-center mb-4">
        Food Category
      </h1>
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-60 rounded-lg overflow-hidden group"
            >
              {/* Image with Zoom on Hover */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Subtle Transparent Overlay with Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                <button className="bg-black/50 border border-white text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-[1px] hover:bg-white/30 transition duration-300">
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[300px] overflow-hidden mt-24 ">
        {/* Blurred Image */}
        <img
          src={img19}
          alt="Background"
          className="w-full h-full object-cover filter blur-[2px]"
        />

        {/* Overlay Text in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl  mt-10 font-bold drop-shadow-lg font-[WindSong]">
            Book Early & Save
          </h2>
          <p className="mt-8 text-lg font-light">
            Every bite tells a story — fresh, tasty & unforgettable!
          </p>
          <button className="mt-8 px-6 py-3 bg-[#00BCA8] text-white rounded-lg hover:bg-[#00a998] transition">
            Book Now
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-mono mt-28 text-center">Meet Our Chef</h1>

      <div className="grid grid-cols-1 ml-10 mr-10 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { name: "Chef Antonio", img: img15 },
          { name: "Chef Yasmin", img: img15 },
          { name: "Chef Hiroshi", img: img15 },
          { name: "Chef Adeel", img: img15 },
        ].map((chef, index) => (
          <div key={index} className="relative group">
            <img
              src={chef.img}
              alt={chef.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Transparent Name Box */}
            <div className="absolute top-3 left-3 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-md transition-transform duration-300 group-hover:scale-105">
              <p className="text-sm font-semibold text-gray-800">{chef.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-6 py-3 text-center mt-12 ml-[43%] bg-gradient-to-r from-[#00BCA8] to-[#0E9AA7] text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
        Explore More
      </button>
      <div>
        <div className="mt-20  px-6 md:px-20 ">
          {/* First Section: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4 font-[WindSong]">
                Our Restaurant
              </h2>
              <p className="text-gray-700 font-Font3 text-[14px]">
                Lorem ipsum dolor sit amet consectetur. Sed amet nibh ante
                <br />
                ultrices adipiscing euismod enim diam imperdiet. Tellus justo
                <br />
                proin sed orci et turpis diam libero. Eleifend facilisis sed
                <br />
                facilisis varius hendrerit accumsan tortor. Donec nisi est
                <br />
                mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
                <br />
                facilisis varius hendrerit accumsan tortor. Donec nisi est
                <br />
                mattis mauris morbi orci maecenas duis lobortis.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 mt-4 mr-5">
              <img
                src={img18}
                alt="Our Story"
                className="w-full h-auto shadow-md mt-2"
              />
            </div>
          </div>

          {/* Second Section: Image Left, Text Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Image */}
            <div className="md:w-1/2 ml-5">
              <img
                src={img10}
                alt="Our Vision"
                className="w-full h-auto shadow-md"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 mt-6">
              <h2 className="text-5xl ml-24 font-[WindSong] mb-4">
                Meet & Greet
              </h2>
              <p className="text-gray-700 font-Font3 mt-6 ml-24 text-[14px]">
                Lorem ipsum dolor sit amet consectetur. Sed amet nibh ante
                <br />
                ultrices adipiscing euismod enim diam imperdiet. Tellus justo
                <br />
                proin sed orci et turpis diam libero. Eleifend facilisis sed
                <br />
                facilisis varius hendrerit accumsan tortor. Donec nisi est
                <br />
                mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
                <br />
                facilisis varius hendrerit accumsan tortor. Donec nisi est
                <br />
                mattis mauris morbi orci maecenas duis lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#aae8e3] py-8 mt-28">
        <h1 className="text-center text-5xl font-semibold font-[WindSong] mb-12">
          Our Services
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {/* Icon 1 - Services */}
          <div className="flex flex-col items-center text-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="#454545"
                d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0 0 33.3C119.6 157.2 32 252.4 32 368l448 0c0-115.6-87.6-210.8-200-222.7l0-33.3 16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0-40 0zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 400z"
              />
            </svg>
            <h2 className="text-2xl font-[Federo] mt-2 text-gray-800">
              Concierge Service
            </h2>
            <p className="text-gray-700 text-[13px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est.
              Odio euismod sed amet libero. Scelerisque sed enim. amet libero.
            </p>
          </div>

          {/* Icon 2 - Dining Table */}
          <div className="flex flex-col items-center text-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="28"
              viewBox="0 0 448 512"
            >
              <path
                fill="#4f4f4f"
                d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
              />
            </svg>
            <h2 className="text-2xl font-[Federo] mt-2 text-gray-800">
              Dining
            </h2>
            <p className="text-gray-700 text-[13px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Felis quam ut elementum
              non a consectetur. Vel ornare purus pretium ut.
            </p>
          </div>

          {/* Icon 3 - Restaurant */}
          <div className="flex flex-col items-center text-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="#4f4f4f"
                d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"
              />
            </svg>
            <h2 className="text-2xl font-[Federo] text-gray-800 mt-2">
              Security
            </h2>
            <p className=" text-[13px] text-gray-800 mt-2">
              Lorem ipsum dolor sit amet consectetur. Consequat pretium
              pellentesque venenatis odio cras posuere leo nulla etiam. Massa
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
