import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { useState } from "react"

import { getSingleProduct } from "../services/api"
import { addToCart } from "../redux/cartSlice"
import { useSettings } from "../context/SettingsContext"

export default function ProductDetails() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { state } = useSettings()

  
  const [added, setAdded] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  })

  
  if (isLoading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading product...
      </div>
    )
  }


  if (isError) {
    return (
      <div className="text-center mt-20 text-red-500">
        Error loading product
      </div>
    )
  }

 
  const handleAddToCart = () => {
    dispatch(addToCart(data))

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div
        className={`grid md:grid-cols-2 gap-10 rounded-3xl p-8 shadow-lg
        ${
          state.darkMode
            ? "bg-[#121a2a]"
            : "bg-white"
        }`}
      >

        
        <div className="flex items-center justify-center">

          <img
            src={data.image}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />

        </div>  
        <div>

          <p className="uppercase text-sm tracking-widest text-indigo-500 mb-2">
            {data.category}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {data.title}
          </h1>

          <p className="text-3xl font-bold text-indigo-600 mb-6">
            ${data.price}
          </p>

          <p className="leading-8 text-gray-500 dark:text-gray-300 mb-8">
            {data.description}
          </p>

          <div className="flex items-center gap-2 mb-8">

            <span className="text-yellow-500 text-xl">
              ⭐
            </span>

            <span>
              {data.rating?.rate} / 5
            </span>

            <span className="text-gray-500">
              ({data.rating?.count} reviews)
            </span>

          </div>

          <button
            onClick={handleAddToCart}
            className={`px-8 py-3 rounded-xl text-white transition duration-300
            ${
              added
                ? "bg-green-500 scale-95"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
            }`}
          >

            {added ? "✔ Added To Cart" : "Add To Cart"}

          </button>

        </div>

      </div>

    </div>
  )
}