
import { useDispatch, useSelector } from "react-redux"

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice"

import { useSettings } from "../context/SettingsContext"

export default function Cart() {
  const dispatch = useDispatch()

  const { state } = useSettings()

  const cartItems = useSelector((state) => state.cart.items)

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

 
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-32">

        <h2 className="text-3xl font-bold mb-4">
          🛒 Your cart is empty
        </h2>

        <p className="text-gray-500">
          Add some products to continue shopping
        </p>

      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

     
      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Shopping Cart
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear Cart
        </button>

      </div>

      
      <div className="space-y-6">

        {cartItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-6 p-5 rounded-2xl shadow-md
              ${
                state.darkMode
                  ? "bg-[#121a2a]"
                  : "bg-white"
              }`}
          >

            
            <div className="flex items-center gap-5">

              <img
                src={item.image}
                className="w-24 h-24 object-contain"
              />

              <div>

                <h3 className="font-semibold max-w-xs">
                  {item.title}
                </h3>

                <p className="text-indigo-500 font-bold mt-2">
                  ${item.price}
                </p>

              </div>

            </div>

            
            <div className="flex items-center gap-4">

              
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="w-10 h-10 rounded-full bg-gray-200 text-xl"
              >
                -
              </button>

              
              <span className="text-lg font-bold">
                {item.quantity}
              </span>

              
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="w-10 h-10 rounded-full bg-indigo-600 text-white text-xl"
              >
                +
              </button>

              
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      
      <div
        className={`mt-10 p-6 rounded-2xl shadow-lg
          ${
            state.darkMode
              ? "bg-[#121a2a]"
              : "bg-white"
          }`}
      >

        <div className="flex justify-between mb-4 text-lg">

          <span>Total Items:</span>

          <span className="font-bold">
            {totalItems}
          </span>

        </div>

        <div className="flex justify-between text-2xl font-bold text-indigo-500">

          <span>Total Price:</span>

          <span>
            ${totalPrice.toFixed(2)}
          </span>

        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition">

          Proceed to Checkout

        </button>

      </div>

    </div>
  )
}