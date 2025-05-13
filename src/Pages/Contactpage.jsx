import React from "react";
import Navbar from "../Components/Navbar";
import SidebarNavbar from "../Components/SidebarNavbar";
import Footer from "../Components/Footer";
import img16 from "../assets/img16.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegCommentDots } from "react-icons/fa";

const Contactpage = () => {
  return (
    <>
    <Navbar />
    <SidebarNavbar />
         <div className="relative">
                    <img src={img16} alt="" className="w-full h-[300px] object-cover" />
                    <div className="absolute inset-0 bg-black/50 z-0"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
                      Contact Us
                    </div>
                  </div>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className=" text-black py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Let’s talk! Reservations, events, or just dropping a message — we’re always happy to connect.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-200">
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-600">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-600">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <div className="flex items-start border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-600">
              <FaRegCommentDots className="text-gray-400 mr-3 mt-1" />
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full outline-none bg-transparent resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          {[{
            icon: <FaPhone className="text-white text-xl" />,
            label: 'Phone',
            value: '+92 300 1234567',
            bg: 'bg-teal-500'
          },
          {
            icon: <FaEnvelope className="text-white text-xl" />,
            label: 'Email',
            value: 'contact@restaurant.com',
            bg: 'bg-pink-500'
          },
          {
            icon: <FaMapMarkerAlt className="text-white text-xl" />,
            label: 'Address',
            value: '123 Food Street, Karachi, Pakistan',
            bg: 'bg-yellow-500'
          }].map((item, index) => (
            <div key={index} className={`flex items-center gap-4 p-6 rounded-xl shadow-md text-white ${item.bg}`}>
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm uppercase font-semibold tracking-wide">{item.label}</h4>
                <p className="text-lg font-medium">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Optional Map */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Restaurant Location"
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.757816684349!2d67.00113517527654!3d24.84279894588838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eaa694c198d%3A0xf3d2d3cb8df6ec4e!2sBurns%20Road%20Karachi!5e0!3m2!1sen!2s!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Contactpage;
