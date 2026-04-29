
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { useState } from "react"

import { getProducts } from "../services/api"
import { addToCart } from "../redux/cartSlice"
import { useSettings } from "../context/SettingsContext"

export default function Home() {
  const dispatch = useDispatch()

  const { state } = useSettings()

  
  const [activeId, setActiveId] = useState(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  
  if (isLoading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading products...
      </div>
    )
  }

  
  if (isError) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Error loading products
      </div>
    )
  }

  
  const filteredProducts = data.filter((product) =>
    product.title
      .toLowerCase()
      .includes(state.search.toLowerCase())
  )

 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))

    
    setActiveId(product.id)

    
    setTimeout(() => {
      setActiveId(null)
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      
      <h2 className="text-4xl font-bold text-center mb-10">
        🛍 Our Products
      </h2>

     
      <div
        className={
          state.view === "grid"
            ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "flex flex-col gap-6"
        }
      >

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className={`rounded-2xl p-5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl
            ${
              state.darkMode
                ? "bg-[#121a2a]"
                : "bg-white"
            }`}
          >

           
            <div className="overflow-hidden rounded-xl">

              <img
                src={product.image}
                className="h-52 mx-auto object-contain hover:scale-110 transition duration-300"
              />

            </div>

            
            <h3 className="text-sm mt-4 line-clamp-2 min-h-[40px]">
              {product.title}
            </h3>

            <p className="font-bold text-2xl text-indigo-500 mt-3">
              ${product.price}
            </p>

           
            <div className="flex gap-2 mt-5">

              
              <Link
                to={`/product/${product.id}`}
                className="flex-1 text-center border border-indigo-500 text-indigo-500 py-2 rounded-xl hover:bg-indigo-50 transition"
              >
                Details
              </Link>

             
              <button
                onClick={() => handleAddToCart(product)}
                className={`flex-1 py-2 rounded-xl text-white transition duration-300
                ${
                  activeId === product.id
                    ? "bg-green-500 scale-95"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
                }`}
              >

                {activeId === product.id
                  ? "✔ Added"
                  : "Add"}

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}