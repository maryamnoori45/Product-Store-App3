import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useSettings } from "../context/SettingsContext"

export default function Navbar() {
  const { state, dispatch } = useSettings()
  const items = useSelector((state) => state.cart.items)

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-black/40 border-b border-gray-200 dark:border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

        
        <h1 className="font-bold text-lg">🛍 NeoStore</h1>

       
        <input
          type="text"
          placeholder="Search products..."
          value={state.search}
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
          className="hidden md:block w-64 px-3 py-1 rounded-lg border outline-none bg-transparent"
        />

        
        <div className="flex items-center gap-4">

          <Link to="/">Home</Link>

          <Link to="/cart" className="relative">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          
          <button
            onClick={() => dispatch({ type: "TOGGLE_VIEW" })}
            className="px-2 py-1 bg-gray-200 dark:bg-white/10 rounded"
          >
            {state.view}
          </button>

          
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="px-3 py-1 bg-indigo-600 text-white rounded"
          >
            {state.darkMode ? "Light" : "Dark"}
          </button>

        </div>
      </div>
    </nav>
  )
}