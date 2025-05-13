import React from "react";
import { FaLeaf, FaHeart, FaUsers } from "react-icons/fa";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SidebarNavbar from "../Components/SidebarNavbar";
import img16 from "../assets/img16.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img5 from "../assets/img5.jpg";


const About = () => {
  return (
    <>
    <Navbar />
    <SidebarNavbar />
          <div className="relative">
                <img src={img16} alt="" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
                  About Us
                </div>
              </div>
      {/* Our Story Section */}
      <section className=" text-black mt-10 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Since 2010, we've been blending timeless traditions with bold modern flavors.
            From locally-sourced ingredients to unforgettable dining experiences, our passion
            is plated with every dish we serve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="space-y-4">
              <FaLeaf className="text-3xl text-lime-300" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p>
                To serve dishes that are both nourishing and sustainable, celebrating local produce
                and global flavors.
              </p>
            </div>
            <div className="space-y-4">
              <FaHeart className="text-3xl text-pink-300" />
              <h3 className="text-2xl font-bold">Our Passion</h3>
              <p>
                Food is our love language. Every recipe is crafted with care, love, and a touch of creativity.
              </p>
            </div>
            <div className="space-y-4">
              <FaUsers className="text-3xl text-yellow-300" />
              <h3 className="text-2xl font-bold">Our Community</h3>
              <p>
                We believe in bringing people together — one table, one meal, and one story at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-teal-700 mb-12">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {["dish1.jpg", "dish2.jpg", "dish3.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={img1}
                  alt={`Dish ${idx + 1}`}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dish Name {idx + 1}</h3>
                  <p className="text-gray-700">
                    A mouthwatering specialty crafted with fresh ingredients and bold flavors.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-teal-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Behind every great meal is an even greater team — full of passion, experience, and heart.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Chef Antonio", role: "Head Chef", bg: "bg-rose-100" },
              { name: "Maria Lopez", role: "General Manager", bg: "bg-yellow-100" },
              { name: "David Kim", role: "Lead Server", bg: "bg-lime-100" },
            ].map((member, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${member.bg} text-gray-800 shadow-md hover:scale-105 transition-transform`}
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-bold mb-4">
                  {member.name.split(" ")[0][0]}
                  {member.name.split(" ")[1][0]}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
