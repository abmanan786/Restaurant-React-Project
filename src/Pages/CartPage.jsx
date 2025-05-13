import { useState } from "react";
import { useCart } from "../Pages/CartContext";
import Navbar from "../Components/Navbar";
import SidebarNavbar from "../Components/SidebarNavbar";
import img16 from "../assets/img16.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10; // Fixed shipping charge
  const subtotal = total + shipping;
  const finalTotal = subtotal - discount;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <>
      <Navbar />
      <SidebarNavbar />
      <div className="relative">
        <img src={img16} alt="" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-[windSong] z-10">
          Cart Items
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-10 mb-6">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="w-24 h-24">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 ml-6">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-300 px-2 py-1 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="min-w-[30px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-300 px-2 py-1 rounded text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="w-32 text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xl hover:text-red-600 ml-4"
                    title="Remove"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>

            {/* Coupon Code */}
            <div className="mt-16 space-y-4">
              <p className="text-2xl font-semibold">Coupon Code</p>
              <div className="flex items-center ">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="p-2 border rounded-l-md w-72"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-teal-600 text-white px-6 py-2 rounded-r-md hover:bg-teal-700 transition duration-300"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <p className="text-2xl mt-[-100px] font-semibold ml-[600px]">
              Total Bill
            </p>
            <div className="mt-6 mx-auto ml-[600px] w-96 p-4 border rounded-lg shadow-md bg-white">
              <div className="flex justify-between font-mono">
                <span>Cart Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 font-mono">
                <span>Cart Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 my-2"></div>{" "}
              {/* Darker line */}
              <div className="flex justify-between pt-2 font-mono">
                <span>Total Amount</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="text-center ml-96 mt-6">
              <button
                onClick={handleCheckout}
                className="bg-teal-600 text-white text-sm px-5 py-2 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
