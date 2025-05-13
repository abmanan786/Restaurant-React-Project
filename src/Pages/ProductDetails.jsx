import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SidebarNavbar from "../Components/SidebarNavbar";
import products from "./data";
import { Link } from "react-router-dom";
import img16 from "../assets/img16.jpg";
import { useCart } from "../Pages/CartContext"; // Yeh path sahi hai agar CartContext ko Pages folder mein rakha hai
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const { addToCart } = useCart();
  const navigate = useNavigate();

  

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        Product not found!
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(product?.image);
  const [isDescription, setIsDescription] = useState(true);

  return (
    <>
      <Navbar />
      <SidebarNavbar />

      {/* Top Banner */}
      <div className="relative">
        <img src={img16} alt="" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
          Product Details
        </div>
      </div>

      {/* Main Content */}
      <div className="p-10">
        <div className="flex mt-16 flex-col md:flex-row gap-10">
          {/* Thumbnails */}
          <div className="flex">
            <div className="flex flex-col gap-4 mr-4">
              {(product.thumbnails || [product.image]).map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`thumb-${index}`}
                  className="w-20 h-[100px] object-cover rounded cursor-pointer border hover:border-teal-500"
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div>
              <img
                src={mainImage}
                alt={product.name}
                className="w-[400px] h-[450px] object-cover rounded shadow-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-mono mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-7 mb-4">
              Category: {product.category}
            </p>
            <p className="text-lg text-gray-600 mt-7 font-thin mb-6">
              {product.About}
            </p>
            <div className="border-t border-black opacity-30 my-6" />
            <div className="flex items-center gap-4 mb-4">
              <p className="text-3xl font-semibold text-black">
                ${product.price}
              </p>
              <del className="text-gray-400 text-xl">${product.oldprice}</del>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
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
            {/* Add to Cart Button */}
            <button  onClick={handleAddToCart} className="flex items-center gap-2 bg-teal-600 mt-5 text-white px-6 py-3 rounded hover:bg-teal-700 hover:scale-105 transition-transform duration-300 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h11.379c.884 0 1.38-1.02.878-1.75L17.25 9.75H8.25M7.5 14.25L5.625 6.75H3.75m3.75 7.5L6 18.75M18 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Add to Cart
            </button>{" "}
            <div className="border-t border-black opacity-30 my-6" />
          </div>
        </div>
      </div>

      {/* Tabs Toggle */}
      <div className="flex items-center gap-6 ml-10 mt-10">
        <span
          onClick={() => setIsDescription(true)}
          className={`text-xl cursor-pointer underline-offset-8 italic transition duration-200 ${
            isDescription
              ? "underline decoration-2 decoration-lime-700 font-semibold text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Description
        </span>
        <span
          onClick={() => setIsDescription(false)}
          className={`text-xl cursor-pointer italic transition duration-200 ${
            !isDescription
              ? "underline decoration-2 underline-offset-8 decoration-lime-700 font-semibold text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Reviews (24)
        </span>
      </div>

      {/* Toggle Content */}
      {isDescription ? (
        <>
          <p className="text-sm ml-10 mr-10 text-gray-500 mt-10 leading-relaxed">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis...
          </p>
          <p className="text-sm ml-10 mr-10 text-gray-500 mt-6 leading-relaxed">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex...
          </p>
          <p className="text-lg ml-10 mr-10 text-black font-mono mt-10">
            Key Benefits
          </p>
          <ul className="list-disc ml-20 font-thin mr-10 text-gray-500 mt-6 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc</li>
            <li>Mauris eget diam magna, in blandit turpis</li>
          </ul>
        </>
      ) : (
        <div className="ml-10 mr-10 mt-10 space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <p className="text-sm text-gray-800 font-semibold mb-1">
                User {index + 1}
              </p>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 text-[18px] ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">
                Great quality! Totally satisfied with the product.
              </p>
            </div>
          ))}
        </div>
      )}

      <h1 className="text-3xl font-mono text-center mt-20">Similar Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 py-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md"
              />
              {/* Hover Overlay */}
              <Link to={`/productdetails/${product.id}`}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-sm bg-teal-600 px-3 py-1 rounded">
                    View Details
                  </span>
                </div>
              </Link>
            </div>

            {/* Price Section */}
            <div className="px-4 py-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-3">
                <span className="text-blue-600 font-bold text-md">
                  ${product.price}
                </span>
                <del className="text-gray-400 text-sm">${product.oldprice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
