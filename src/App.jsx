import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"
import { useSettings } from "./context/SettingsContext"

export default function App() {
  const { state } = useSettings()

  return (
    <div
      className={`min-h-screen pt-24 transition-all duration-300 ${
        state.darkMode ? "bg-[#0b1220] text-white" : "bg-[#f5f7fb] text-black"
      }`}
    >
      <Navbar />
      <AppRoutes />
    </div>
  )
}