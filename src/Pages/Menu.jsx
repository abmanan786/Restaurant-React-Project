import React from "react";
import Navbar from "../Components/Navbar";
import SidebarNavbar from "../Components/SidebarNavbar";
import img16 from "../assets/img16.jpg";
import Cheficon from "../assets/Cheficon.jpg";
import products from "./data";
import { Link } from "react-router-dom";
import Spoonicon from "../assets/Spoonicon.jpg";
import Burgericon from "../assets/Burgericon.jpg";
import Pizzaicon from "../assets/Pizzaicon.jpg";
import Footer from "../Components/Footer";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Menu = () => {
  return (
    <>
      <Navbar />
      <SidebarNavbar />
      <div className="relative">
        <img src={img16} alt="" />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute mt-[-50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
          Menu
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="text-3xl font-mono underline decoration-1 decoration-lime-700 underline-offset-8 text-center mt-20">
          STARTER
        </p>
        <p className="text-3xl ml-20 text-[#a19f9f] font-mono text-center mt-20">
          MAIN COURSE
        </p>
        <p className="text-3xl ml-20 text-[#a19f9f] font-mono text-center mt-20">
          DESSERTS
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-12">
                {/* Product Image */}
                <div className="md:w-1/3">
                  <Link to={`/productdetails/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-72 mt-10 ml-10 h-56 object-cover object-center rounded-lg shadow-md shadow-teal-400/50 hover:shadow-teal-500/50 hover:scale-95 transition duration-300"
                    />
                  </Link>
                </div>

                {/* Product Info */}
                <div className="md:w-2/3 w-full">
                  <h3 className="text-[30px] mt-10 ml-[-25px] font-mono cursor-pointer mb-2">
                    {product.name}
                  </h3>

                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 ml-[-25px] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-[20px] ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm ml-2 text-gray-500 italic">
                      ({product.reviews || Math.floor(Math.random() * 400 + 50)}{" "}
                      reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4 ml-[-25px] flex flex-wrap items-center gap-4">
                    <p className="text-xl font-semibold text-blue-600">
                      ${product.price}
                    </p>
                    <del className="text-gray-400 text-sm">
                      ${product.oldprice}
                    </del>
                  </div>

                  {/* View Details Button */}

                  <Link to={`/productdetails/${product.id}`}>
                    {" "}
                    <div className="mt-6 ml-[-25px]">
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#00BCA8] border border-gray-300 text-white hover:scale-105 rounded-md shadow-sm transition duration-200">
                        <InformationCircleIcon className="w-5 h-5 text-white" />
                        <span className="font-medium">View Details</span>
                      </button>
                    </div>{" "}
                  </Link>
                </div>
              </div>

              {/* Divider Line */}
              <div className="mt-8">
                <div className="mx-10 md:mx-20 border-t border-black opacity-100" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>

      {/* Icon Section */}
      <div className="mt-36 relative">
        <img
          src={img16}
          alt="Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          <div className="flex flex-wrap gap-24 justify-center items-center">
            {[
              { label: "420", subLabel: "Professional Chefs", image: Cheficon },
              { label: "Tasty", subLabel: "Items Of Food", image: Burgericon },
              { label: "Healthy", subLabel: "Items Of Food", image: Spoonicon },
              { label: "Expert", subLabel: "Items Of Food", image: Pizzaicon },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-[120px] h-[120px] object-contain"
                />
                <p className="mt-3 text-2xl font-mono">{item.label}</p>
                <p className="mt-3 text-2xl font-mono">{item.subLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
