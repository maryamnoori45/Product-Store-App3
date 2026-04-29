import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import { store } from "./redux/store"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { SettingsProvider } from "./context/SettingsContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)